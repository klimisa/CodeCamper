﻿using System.Data.Entity.ModelConfiguration;
using CodeCamper.Model;

namespace CodeCamper.Data.Configuration
{
    public class SessionConfiguration: EntityTypeConfiguration<Session>
    {
        public SessionConfiguration()
        {
            HasRequired(s => s.Speaker)
                .WithMany(p => p.SpeakerSessions)
                .HasForeignKey(s => s.SpeakerId);
        }
    }
}