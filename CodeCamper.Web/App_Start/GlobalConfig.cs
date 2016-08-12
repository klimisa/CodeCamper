using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Dependencies;
using CodeCamper.Data;
using CodeCamper.Data.Contracts;
using CodeCamper.Data.Helpers;
using Newtonsoft.Json.Serialization;
using Ninject;

namespace CodeCamper.Web
{
    public class GlobalConfig
    {
        public static void CustomizeConfig(HttpConfiguration config)
        {
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            config.Filters.Add(new ValidationActionFilter());
        }
    }
}