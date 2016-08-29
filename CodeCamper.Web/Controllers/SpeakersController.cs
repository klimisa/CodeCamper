using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using CodeCamper.Data.Contracts;
using CodeCamper.Model;

namespace CodeCamper.Web.Controllers
{
    public class SpeakersController : ApiControllerBase
    {
        public SpeakersController(ICodeCamperUow uow)
        {
            Uow = uow;
        }

        // GET: api/Speakers
        public IEnumerable<Speaker> Get()
        {
            return Uow.Persons.GetSpeakers().OrderBy(p => p.LastName);
        }
    }
}
