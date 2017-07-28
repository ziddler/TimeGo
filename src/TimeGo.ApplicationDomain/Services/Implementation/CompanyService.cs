﻿using System.Collections.Generic;
using System.Linq;
using TimeGo.ApplicationDomain.Entities;
using TimeGo.ApplicationDomain.Enums;
using TimeGo.ApplicationDomain.Persistance;
using System.Linq.Dynamic;

namespace TimeGo.ApplicationDomain.Services.Implementation
{
    public class CompanyService : ICompanyService
    {
        private readonly IRepository _repository;

        public CompanyService(IRepository repository)
        {
            _repository = repository;
        }

        public Company GetCompanyFromUrl(string url)
        {
            var subDomain = url.Split('.')[0].Replace("http://", "").Replace("https://", "");
            var company = _repository.Find<Company>().SingleOrDefault(c => c.TimeGoUrl == subDomain);
            return company;
        }

        public IEnumerable<Company> GetAll(string sortExpression, int page, int pageSize)
        {
            return _repository.Find<Company>().OrderBy(sortExpression).Skip(pageSize * page).Take(pageSize);
        }

        public ErrorCodes EditCompany(Company model)
        {
            var company = _repository.FindForUpdate<Company>(model.Id);
            company.CompanyName = model.CompanyName;
            company.EmailAddress = model.EmailAddress;
            company.ContactName = model.ContactName;
            company.BillingAddressLine1 = model.BillingAddressLine1;
            company.BillingAddressLine2 = model.BillingAddressLine2;
            company.BillingAddressCity = model.BillingAddressCity;
            company.BillingAddressState = model.BillingAddressState;
            company.BillingAddressZip = model.BillingAddressZip;
            company.BillingAddressCountry = model.BillingAddressCountry;
            company.TimezoneId = model.TimezoneId;
            company.WorkweekStaryDay = model.WorkweekStaryDay;
            company.PhoneNumber = model.PhoneNumber;
            company.TimeGoUrl = model.TimeGoUrl;
            company.CompanyApprovedId = model.CompanyApprovedId;
            company.SubscriptionPlanId = model.SubscriptionPlanId;
            _repository.Save();
            return ErrorCodes.Success;
        }
    }
}