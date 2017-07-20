﻿using System.Collections.Generic;
using TimeGo.ApplicationDomain.Models.ViewModels;
using TimeGo.Data;

namespace TimeGo.ApplicationDomain
{
    public interface IAccountService
    {
        ViewError SignUp(SignUpModel model);
        List<Timezone> GetTimeZones();
        ViewError ForgotPassword(string email);
        void ResetPassword(int userId, string code, string password);
        void ConfirmEmail(int userId, string code);
    }
}