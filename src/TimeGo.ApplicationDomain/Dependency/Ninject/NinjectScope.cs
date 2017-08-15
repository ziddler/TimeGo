﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Dependencies;
using Ninject.Parameters;
using Ninject.Syntax;

namespace TimeGo.ApplicationDomain.Dependency.Ninject
{
    public class NinjectScope : IDependencyScope
    {
        protected IResolutionRoot ResolutionRoot;

        public NinjectScope(IResolutionRoot kernel)
        {
            ResolutionRoot = kernel;
        }

        public object GetService(Type serviceType)
        {
            var request = ResolutionRoot.CreateRequest(serviceType, null, new Parameter[0], true, true);
            return ResolutionRoot.Resolve(request).SingleOrDefault();
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            var request = ResolutionRoot.CreateRequest(serviceType, null, new Parameter[0], true, true);
            return ResolutionRoot.Resolve(request).ToList();
        }

        public void Dispose()
        {
            var disposable = (IDisposable) ResolutionRoot;
            disposable?.Dispose();
            ResolutionRoot = null;
        }
    }
}