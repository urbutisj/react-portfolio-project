"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieState = void 0;

var _athleteSmall = _interopRequireDefault(require("./img/athlete-small.png"));

var _goodtimesSmall = _interopRequireDefault(require("./img/goodtimes-small.png"));

var _theracerSmall = _interopRequireDefault(require("./img/theracer-small.png"));

var _athlete = _interopRequireDefault(require("./img/athlete2.png"));

var _goodTimes = _interopRequireDefault(require("./img/good-times2.jpg"));

var _theRacer = _interopRequireDefault(require("./img/the-racer2.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Import Images	
var MovieState = function MovieState() {
  return [{
    title: "The Athlete",
    mainImg: _athleteSmall["default"],
    secondaryImg: _athlete["default"],
    url: "/work/the-athlete",
    awards: [{
      title: "Truly A masterpiece",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }, {
      title: "Fresh look on a brutal sport.",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }, {
      title: "It’s okay lmao.",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }]
  }, {
    title: "Good Times",
    mainImg: _goodtimesSmall["default"],
    url: "/work/good-times",
    secondaryImg: _goodTimes["default"],
    awards: [{
      title: "Truly A masterpiece",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }, {
      title: "Fresh look on a brutal sport.",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }, {
      title: "It’s okay lmao.",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }]
  }, {
    title: "The Racer",
    mainImg: _theracerSmall["default"],
    url: "/work/the-racer",
    secondaryImg: _theRacer["default"],
    awards: [{
      title: "Truly A masterpiece",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }, {
      title: "Fresh look on a brutal sport.",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }, {
      title: "It’s okay lmao.",
      description: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”"
    }]
  }];
};

exports.MovieState = MovieState;