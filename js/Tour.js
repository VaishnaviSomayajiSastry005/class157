

AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id)
      
      // Thumbnail Element
      const thumbnails=this.createThumbnail(item)
      borderEl.appendChild(thumbnails)

      // Title Text Element
      const titleEl=this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder:function(position,id){
    const entityEL=document.createElement("a-entity")
    entityEL.setAttribute("id",id)
    entityEL.setAttribute("visible",true)
    entityEL.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    })
    entityEL.setAttribute("position",position)
    entityEL.setAttribute("material",{color:"#0077cc",opacity:1})
    return entityEL
  },
  createTitleEl:function(position,item){
    const entityEL=document.createElement("a-entity")
    entityEL.setAttribute("text",{
      font:"exo2bold",
      align:"centre",
      width:70,
      color:"#e65100",
      value:item.title
    })
    const Elposition=position;
    Elposition.y=-20
    entityEL.setAttribute("position",Elposition)
    entityEL.setAttribute("visible",true)
    return entityEL
  },
  createThumbnail:function(item){
    const entityEL=document.createElement("a-entity")
    entityEL.setAttribute("visible",true)
    entityEL.setAttribute("geometry",{
      primitive:"circle",
      radius:9,
    })
    entityEL.setAttribute("material",{src:item.url})
    return entityEL  
  }
});
