﻿namespace TimeGo.ApplicationDomain.Persistance
{
    public interface IIdentifiable<out T> : IIdentifiable
    {
        new T Id { get; }
    }

    public interface IIdentifiable
    {
        object Id { get; }
    }
}
