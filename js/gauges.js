count = 0;
var waypoint = new Waypoint({
  element: document.getElementById('skills'),
  handler: function() {
    if(count<1){
      var opts = {
      angle: -.5, // The span of the gauge arc
      lineWidth: 0.08, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
      length: 0, // // Relative to gauge radius
      strokeWidth: 0, // The thickness
      color: '#000000' // Fill color
      },
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      colorStart: '#30bae7',   // Colors
      colorStop: '#30bae7',    // just experiment with them
      strokeColor: '#dfe8ed',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true     // High resolution support
      };
      var target = document.getElementById('gauge1'); // your canvas element
      var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
      gauge.setTextField(document.getElementById("indicator1")); //SET TEXT FIELD IN THE ELEMENT
      gauge.maxValue = 100; // set max gauge value
      gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
      gauge.animationSpeed = 50; // set animation speed (32 is default value)
      gauge.set(90); // set actual value


      //second gauge
      var opts = {
      angle: -.5, // The span of the gauge arc
      lineWidth: 0.08, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
      length: 0, // // Relative to gauge radius
      strokeWidth: 0, // The thickness
      color: '#000000' // Fill color
      },
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      colorStart: '#d74680',   // Colors
      colorStop: '#d74680',    // just experiment with them
      strokeColor: '#dfe8ed',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true     // High resolution support
      };
      var target = document.getElementById('gauge2'); // your canvas element
      var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
      gauge.setTextField(document.getElementById("indicator2")); //SET TEXT FIELD IN THE ELEMENT
      gauge.maxValue = 100; // set max gauge value
      gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
      gauge.animationSpeed = 50; // set animation speed (32 is default value)
      gauge.set(75); // set actual value


      //third gauge
      var opts = {
      angle: -.5, // The span of the gauge arc
      lineWidth: 0.08, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
      length: 0, // // Relative to gauge radius
      strokeWidth: 0, // The thickness
      color: '#000000' // Fill color
      },
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      colorStart: '#15c7a8',   // Colors
      colorStop: '#15c7a8',    // just experiment with them
      strokeColor: '#dfe8ed',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true     // High resolution support
      };
      var target = document.getElementById('gauge3'); // your canvas element
      var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
      gauge.setTextField(document.getElementById("indicator3")); //SET TEXT FIELD IN THE ELEMENT
      gauge.maxValue = 100; // set max gauge value
      gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
      gauge.animationSpeed = 50; // set animation speed (32 is default value)
      gauge.set(70); // set actual value


      //fourth gauge
      var opts = {
      angle: -.5, // The span of the gauge arc
      lineWidth: 0.08, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
      length: 0, // // Relative to gauge radius
      strokeWidth: 0, // The thickness
      color: '#000000' // Fill color
      },
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      colorStart: '#eb7d4b',   // Colors
      colorStop: '#eb7d4b',    // just experiment with them
      strokeColor: '#dfe8ed',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true     // High resolution support
      };
      var target = document.getElementById('gauge4'); // your canvas element
      var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
      gauge.setTextField(document.getElementById("indicator4")); //SET TEXT FIELD IN THE ELEMENT
      gauge.maxValue = 100; // set max gauge value
      gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
      gauge.animationSpeed = 50; // set animation speed (32 is default value)
      gauge.set(85); // set actual value
      count++;
    }
  },
  offset: 40
})
