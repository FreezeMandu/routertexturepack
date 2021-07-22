Vars.content.bullets().each(b => 
    b instanceof BasicBulletType, b => b.frontRegion = Core.atlas.find("router"));


Vars.content.blocks.each(b => {
    if(b.update) b.hasShadow = false;
    });