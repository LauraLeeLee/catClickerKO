var ViewModel = function() {
  var self = this;

  self.clickCount = ko.observable(0);
  self.name = ko.observable('Tabby');
  self.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  self.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
  self.catLevel = ko.observable('Newborn');
  self.nicknames = ko.observableArray([
    {nickname: 'Tabs'},
    {nickname: 'T-man'},
    {nickname: 'Taboo'}
  ]);

  self.incrementClickCounter = function() {
    self.clickCount(self.clickCount()+1);
  };

  self.catLevel = ko.computed(function(){
    var title;
    var clicks = self.clickCount();
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
  });


}


ko.applyBindings(new ViewModel());
