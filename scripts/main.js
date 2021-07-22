Events.on(EventType.ClientLoadEvent, e=>{
    Vars.content.bullets().each(b => b instanceof BasicBulletType, b => b.frontRegion = Core.atlas.find("router"));
    });
// BulletType
    