AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },  
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    
  },
  
});
