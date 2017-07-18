﻿using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using TimeGo.Web.Mvc.Models;
using System.Collections.Generic;
using TimeGo.Data;
using TimeGo.Web.Mvc.Infrastructure.Services.Interfaces;

namespace TimeGo.Web.Mvc.Controllers
{
    [Authorize]
    public class AccountController : BaseController
    {
        private ApplicationSignInManager _signInManager;
        private ApplicationUserManager _userManager;

        public AccountController(ApplicationUserManager userManager, ApplicationSignInManager signInManager, TimeGoEntities context, ICompanyService companyService):base(context, companyService)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        [Route("SignUp")]
        [AllowAnonymous]
        public ActionResult SignUp()
        {
            SignUpViewModel Model = new SignUpViewModel();

            Model.Timezones = _context.Timezones.Select(f => new SelectListItem
            {
                Value = f.TimezoneId.ToString(),
                Text = f.TimezoneName
            });

            PopulateModel(Model);

            return View(Model);
        }

        [Route("SignUp")]
        [Route("Account/SignUp")]
        [HttpPost]
        [AllowAnonymous]
        public ActionResult SignUp(SignUpViewModel Model)
        {
            if (!ModelState.IsValid)
            {
                return View(Model);
            }

            //Create New Company
            Data.Company Company = new Data.Company();
            Company.CompanyName = Model.CompanyName;
            Company.ContactName = Model.FirstName + " " + Model.LastName;
            Company.EmailAddress = Model.Email;
            Company.PhoneNumber = Model.PhoneNumber;
            Company.TimeGoURL = Model.CompanyURL;
            Company.UpdatedOn = DateTime.UtcNow;

            Company.TimezoneId = Model.TimezoneId;
            Company.WorkweekStaryDay = (int?)Model.WorkweekStaryDay;


            _context.Entry(Company).State = System.Data.Entity.EntityState.Added;
            _context.SaveChanges();
            //Create login account for primary account
            Data.Employee Employee = new Data.Employee();
            Employee.CompanyId = Company.CompanyId;
            Employee.EmailAddress = Model.Email;
            Employee.Phonenumber = Model.PhoneNumber;
            Employee.Password = Model.Password;
            Employee.FirstName = Model.FirstName;
            Employee.LastName = Model.LastName;
            Employee.IsActive = true;
            Employee.RoleId = 2;

            _context.Entry(Employee).State = System.Data.Entity.EntityState.Added;
            _context.SaveChanges();

            return RedirectPermanent("/" + Company.TimeGoURL);
        }





        // GET: /Account/Login
        [Route("{CompanyURL}")]
        [AllowAnonymous]
        public ActionResult CompanyLogin(string CompanyURL)
        {
            Session.Abandon();
            Session.Clear();

            LoginViewModel Model = new LoginViewModel();
            PopulateModel(Model);

            var tmpCompany = _context.Companies.Where(c => c.TimeGoURL == CompanyURL).FirstOrDefault();
            if (tmpCompany == null)
                return RedirectPermanent("/Login");

            ViewBag.CompanyName = tmpCompany.CompanyName;
            Model.CompanyName = tmpCompany.CompanyName;
            Model.CompanyURL = CompanyURL;
            Model.CompanyId = tmpCompany.CompanyId;

            return View(Model);
        }

        //
        // POST: /Account/Login
        [HttpPost]
        [Route("{CompanyURL}")]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult CompanyLogin(string CompanyURL, LoginViewModel model, string returnUrl)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }


            var Company = _context.Companies.Where(c => c.CompanyId == model.CompanyId).FirstOrDefault();
            var Employee = _context.Employees.Where(e => e.CompanyId == Company.CompanyId && e.IsActive == true && (e.EmailAddress == model.Email || e.UserName == model.Email) && e.Password == model.Password).FirstOrDefault();
            if (Employee == null)
            {
                ModelState.AddModelError("", "Invalid login attempt.");
                return View(model);
            }
            Session["CompanyId"] = Company.CompanyId;
            Session["CompanyURL"] = Company.TimeGoURL;
            Session["CompanyName"] = Company.CompanyName;
            Session["LoginId"] = Employee.EmployeeId;
            Session["LoginName"] = Employee.FirstName + " " + Employee.LastName;
            Session["RoleId"] = Employee.RoleId;

            return RedirectToLocal("/" + Company.TimeGoURL + "/user");
        }



        // GET: /Account/Login
        [Route("Login")]
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            Session.Abandon();
            Session.Clear();
            LoginViewModel Model = new LoginViewModel();
            PopulateModel(Model);

            Model.Companies = new List<SelectListItem>();
            foreach (var Company in _context.Companies)
            {
                SelectListItem selectList = new SelectListItem()
                {
                    Text = Company.CompanyName,
                    Value = Company.CompanyId.ToString()
                };
                Model.Companies.Add(selectList);
            }

            ViewBag.ReturnUrl = returnUrl;
            return View(Model);
        }



        //
        // POST: /Account/Login
        [HttpPost]
        [Route("Login")]
        [AllowAnonymous]
        public ActionResult Login(LoginViewModel Model)
        {
            if (!ModelState.IsValid)
            {
                return View(Model);
            }


            var Company = _context.Companies.Where(c => c.CompanyId == Model.CompanyId).FirstOrDefault();
            var Employee = _context.Employees.Where(e => e.CompanyId == Company.CompanyId && e.IsActive == true && e.EmailAddress == Model.Email).FirstOrDefault();
            if (Employee == null)
            {
                Model.Companies = new List<SelectListItem>();
                foreach (var Comp in _context.Companies)
                {
                    SelectListItem selectList = new SelectListItem()
                    {
                        Text = Comp.CompanyName,
                        Value = Comp.CompanyId.ToString()
                    };
                    Model.Companies.Add(selectList);
                }

                ModelState.AddModelError("", "Invalid login attempt.");
                return View(Model);
            }


            Session["CompanyId"] = Company.CompanyId;
            Session["CompanyURL"] = Company.TimeGoURL;
            Session["CompanyName"] = Company.CompanyName;
            Session["LoginId"] = Employee.EmployeeId;
            Session["LoginName"] = Employee.FirstName + " " + Employee.LastName;
            Session["RoleId"] = Employee.RoleId;

            return RedirectToLocal("/" + Company.TimeGoURL + "/user");
        }

        //
        // GET: /Account/VerifyCode
        [AllowAnonymous]
        public async Task<ActionResult> VerifyCode(string provider, string returnUrl, bool rememberMe)
        {
            // Require that the user has already logged in via username/password or external login
            if (!await SignInManager.HasBeenVerifiedAsync())
            {
                return View("Error");
            }
            return View(new VerifyCodeViewModel { Provider = provider, ReturnUrl = returnUrl, RememberMe = rememberMe });
        }

        //
        // POST: /Account/VerifyCode
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> VerifyCode(VerifyCodeViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // The following code protects for brute force attacks against the two factor codes. 
            // If a user enters incorrect codes for a specified amount of time then the user account 
            // will be locked out for a specified amount of time. 
            // You can configure the account lockout settings in IdentityConfig
            var result = await SignInManager.TwoFactorSignInAsync(model.Provider, model.Code, isPersistent: model.RememberMe, rememberBrowser: model.RememberBrowser);
            switch (result)
            {
                case SignInStatus.Success:
                    return RedirectToLocal(model.ReturnUrl);
                case SignInStatus.LockedOut:
                    return View("Lockout");
                case SignInStatus.Failure:
                default:
                    ModelState.AddModelError("", "Invalid code.");
                    return View(model);
            }
        }

        //
        // GET: /Account/ConfirmEmail
        [AllowAnonymous]
        public async Task<ActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return View("Error");
            }
            var result = await UserManager.ConfirmEmailAsync(userId, code);
            return View(result.Succeeded ? "ConfirmEmail" : "Error");
        }

        //
        // GET: /Account/ForgotPassword
        [AllowAnonymous]
        public ActionResult ForgotPassword()
        {
            return View();
        }

        //
        // POST: /Account/ForgotPassword
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ForgotPassword(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await UserManager.FindByNameAsync(model.Email);
                if (user == null || !(await UserManager.IsEmailConfirmedAsync(user.Id)))
                {
                    // Don't reveal that the user does not exist or is not confirmed
                    return View("ForgotPasswordConfirmation");
                }

                // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=320771
                // Send an email with this link
                // string code = await UserManager.GeneratePasswordResetTokenAsync(user.Id);
                // var callbackUrl = Url.Action("ResetPassword", "Account", new { userId = user.Id, code = code }, protocol: Request.Url.Scheme);		
                // await UserManager.SendEmailAsync(user.Id, "Reset Password", "Please reset your password by clicking <a href=\"" + callbackUrl + "\">here</a>");
                // return RedirectToAction("ForgotPasswordConfirmation", "Account");
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //
        // GET: /Account/ForgotPasswordConfirmation
        [AllowAnonymous]
        public ActionResult ForgotPasswordConfirmation()
        {
            return View();
        }

        //
        // GET: /Account/ResetPassword
        [AllowAnonymous]
        public ActionResult ResetPassword(string code)
        {
            return code == null ? View("Error") : View();
        }

        //
        // POST: /Account/ResetPassword
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var user = await UserManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                return RedirectToAction("ResetPasswordConfirmation", "Account");
            }
            var result = await UserManager.ResetPasswordAsync(user.Id, model.Code, model.Password);
            if (result.Succeeded)
            {
                return RedirectToAction("ResetPasswordConfirmation", "Account");
            }
            AddErrors(result);
            return View();
        }

        //
        // GET: /Account/ResetPasswordConfirmation
        [AllowAnonymous]
        public ActionResult ResetPasswordConfirmation()
        {
            return View();
        }

        //
        // POST: /Account/ExternalLogin
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ExternalLogin(string provider, string returnUrl)
        {
            // Request a redirect to the external login provider
            return new ChallengeResult(provider, Url.Action("ExternalLoginCallback", "Account", new { ReturnUrl = returnUrl }));
        }

        //
        // GET: /Account/SendCode
        [AllowAnonymous]
        public async Task<ActionResult> SendCode(string returnUrl, bool rememberMe)
        {
            var userId = await SignInManager.GetVerifiedUserIdAsync();
            if (userId == null)
            {
                return View("Error");
            }
            var userFactors = await UserManager.GetValidTwoFactorProvidersAsync(userId);
            var factorOptions = userFactors.Select(purpose => new SelectListItem { Text = purpose, Value = purpose }).ToList();
            return View(new SendCodeViewModel { Providers = factorOptions, ReturnUrl = returnUrl, RememberMe = rememberMe });
        }

        //
        // POST: /Account/SendCode
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> SendCode(SendCodeViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            // Generate the token and send it
            if (!await SignInManager.SendTwoFactorCodeAsync(model.SelectedProvider))
            {
                return View("Error");
            }
            return RedirectToAction("VerifyCode", new { Provider = model.SelectedProvider, ReturnUrl = model.ReturnUrl, RememberMe = model.RememberMe });
        }

        //
        // GET: /Account/ExternalLoginCallback
        [AllowAnonymous]
        public async Task<ActionResult> ExternalLoginCallback(string returnUrl)
        {
            var loginInfo = await AuthenticationManager.GetExternalLoginInfoAsync();
            if (loginInfo == null)
            {
                return RedirectToAction("Login");
            }

            // Sign in the user with this external login provider if the user already has a login
            var result = await SignInManager.ExternalSignInAsync(loginInfo, isPersistent: false);
            switch (result)
            {
                case SignInStatus.Success:
                    return RedirectToLocal(returnUrl);
                case SignInStatus.LockedOut:
                    return View("Lockout");
                case SignInStatus.RequiresVerification:
                    return RedirectToAction("SendCode", new { ReturnUrl = returnUrl, RememberMe = false });
                case SignInStatus.Failure:
                default:
                    // If the user does not have an account, then prompt the user to create an account
                    ViewBag.ReturnUrl = returnUrl;
                    ViewBag.LoginProvider = loginInfo.Login.LoginProvider;
                    return View("ExternalLoginConfirmation", new ExternalLoginConfirmationViewModel { Email = loginInfo.Email });
            }
        }

        //
        // POST: /Account/ExternalLoginConfirmation
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ExternalLoginConfirmation(ExternalLoginConfirmationViewModel model, string returnUrl)
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Manage");
            }

            if (ModelState.IsValid)
            {
                // Get the information about the user from the external login provider
                var info = await AuthenticationManager.GetExternalLoginInfoAsync();
                if (info == null)
                {
                    return View("ExternalLoginFailure");
                }
                var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
                var result = await UserManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    result = await UserManager.AddLoginAsync(user.Id, info.Login);
                    if (result.Succeeded)
                    {
                        await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
                        return RedirectToLocal(returnUrl);
                    }
                }
                AddErrors(result);
            }

            ViewBag.ReturnUrl = returnUrl;
            return View(model);
        }

        //
        // POST: /Account/LogOff
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return RedirectToAction("Index", "Home");
        }

        //
        // GET: /Account/ExternalLoginFailure
        [AllowAnonymous]
        public ActionResult ExternalLoginFailure()
        {
            return View();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_userManager != null)
                {
                    _userManager.Dispose();
                    _userManager = null;
                }

                if (_signInManager != null)
                {
                    _signInManager.Dispose();
                    _signInManager = null;
                }
            }

            base.Dispose(disposing);
        }

        // Used for XSRF protection when adding external logins
        private const string XsrfKey = "XsrfId";

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error);
            }
        }

        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            return RedirectToAction("Index", "Home");
        }

        internal class ChallengeResult : HttpUnauthorizedResult
        {
            public ChallengeResult(string provider, string redirectUri)
                : this(provider, redirectUri, null)
            {
            }

            public ChallengeResult(string provider, string redirectUri, string userId)
            {
                LoginProvider = provider;
                RedirectUri = redirectUri;
                UserId = userId;
            }

            public string LoginProvider { get; set; }
            public string RedirectUri { get; set; }
            public string UserId { get; set; }

            public override void ExecuteResult(ControllerContext context)
            {
                var properties = new AuthenticationProperties { RedirectUri = RedirectUri };
                if (UserId != null)
                {
                    properties.Dictionary[XsrfKey] = UserId;
                }
                context.HttpContext.GetOwinContext().Authentication.Challenge(properties, LoginProvider);
            }
        }
    }
}