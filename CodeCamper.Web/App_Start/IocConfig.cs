using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Dependencies;
using CodeCamper.Data;
using CodeCamper.Data.Contracts;
using CodeCamper.Data.Helpers;
using Ninject;

namespace CodeCamper.Web
{
    public class IocConfig
    {
        public static void RegisterIoc(HttpConfiguration config)
        {
            var kernel = new StandardKernel();

            kernel.Bind<ICodeCamperUow>().To<CodeCamperUow>();
            kernel.Bind<RepositoryFactories>().To<RepositoryFactories>().InSingletonScope();
            kernel.Bind<IRepositoryProvider>().To<RepositoryProvider>();

            config.DependencyResolver = new NinjectDependencyResolver(kernel);
        }
    }
}