Events.on(EventType.ClientLoadEvent, e=>{
    Vars.content.bullets().each(b => b instanceof BasicBulletType, b => b.frontRegion = Core.atlas.find("router"));
    });
Events.on(EventType.ClientLoadEvent, e=>{
    Vars.content.bullets().each(b => b instanceof ArtilleryBulletType, b => b.frontRegion = Core.atlas.find("router"));
    });
Events.on(EventType.ClientLoadEvent, e=>{
    Vars.content.bullets().each(b => b instanceof BulletType, b => b.frontRegion = Core.atlas.find("router"));
    });
    
    