var initialCats = [
    { clickCount: 0,
      name: 'Tabby',
      imgSrc: 'img/434164568_fea0ad4013_z.jpg',
      imgAttribution: 'https://www.flickr.com/photos/big',
      catLevel: 'Newborn',
      nicknames: ['Tabs', 'T-man', 'Taboo']
     },
    { imgSrc: "img/catclicker.jpg",
      name: "Kitty",
      clickCount: 0,
      nicknames: ['Kittah','Kboy','Keeeteee']
    },
    { imgSrc: "img/catclicker2.jpg",
      name: "Mr. Tipps",
      clickCount: 0,
      nicknames: ['Tbaby','T-Rex']
    },
    { imgSrc: "img/catclicker3.jpg",
      name: "FraidyCat",
      clickCount: 0,
      nicknames: ['Scaredy','Heart Attack']
    },
    { imgSrc: "imag/catclicker4.jpg",
      name: "MsClawz",
      clickCount: 0,
      nicknames: ['Slash']
    },
    { imgSrc: "img/catclicker5.jpg",
      name: "ZsaZsa",
      clickCount: 0,
      nicknames: ['Dahhling', 'Princess']
    }
  ]


var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.catLevel = ko.observable(data.catLevel);
  this.nicknames = ko.observableArray(data.nicknames);

  this.catLevel = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if(clicks <5){
      return "Newborn";
    }
    if(clicks>=5 && clicks<=7 ) {
       return "Infant";
    }
    if(clicks>7 && clicks<13){
      return "Child";
    }
    if(clicks>12 && clicks<20){
      return "Teen";
    }
    if(clicks>19 && clicks<41){
      return "Adult";
    }
    if(clicks>40 && clicks<61){
      return "MiddleAge";
    }
    if(clicks>60 && clicks<71){
      return "Old";
    }
    if(clicks>70 ){
      return "Geriatric";
    }
  }, this);
}


var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementClickCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
  };

}
ko.applyBindings(new ViewModel());
