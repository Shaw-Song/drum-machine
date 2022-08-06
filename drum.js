const drumPads=[
    {
    padId:"keyQ",
    keyName:"Q",
    padColor1: "#EDBB99",
    padColor2: "#DC7633",
    display:"Heater1    Awesome!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
    padId:"keyW",
    keyName:"W",
    padColor1: "#F9E79F",
    padColor2: "#F4D03F",
    display:"Heater2    Incredible!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
    padId:"keyE",
    keyName:"E",
    padColor1: "#ABEBC6",
    padColor2: "#58D68D",
    display:"Heater3    Good job!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
    padId:"keyA",
    keyName:"A",
    padColor1: "#A2D9CE ",
    padColor2: "#45B39D",
    display:"Heater4    Well done!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
    padId:"keyS",
    keyName:"S",
    padColor1: "#AED6F1",
    padColor2: "#5DADE2",
    display:"Heater6    Excellent!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
    padId:"keyD",
    keyName:"D",
    padColor1: "#D2B4DE",
    padColor2: "#A569BD",
    display:"Dsc-Oh    Amazing!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
    padId:"keyZ",
    keyName:"Z",
    padColor1: "#F5B7B1",
    padColor2: "#EC7063",
    display:"Kick&Hat    Super!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
    padId:"keyX",
    keyName:"X",
    padColor1: "#ABB2B9",
    padColor2: "#566573",
    display:"RP4-KICK    Great!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
    padId:"keyC",
    keyName:"C",
    padColor1: "#D5DBDB",
    padColor2: "#AAB7B8",
    display:"Cev-H2    Nice work!",
    link:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    },
];
  class DrumPad extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        bgcolor: true
      };
      this.handleClick=this.handleClick.bind(this);
      this.handleKeyDown=this.handleKeyDown.bind(this);
    }
    componentDidMount() {
      document.addEventListener("keydown",this.handleKeyDown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown",this.handleKeyDown);
    }
    handleKeyDown(event){
      if (event.key === this.props.keyName || event.key===this.props.keyName.toLowerCase()){
        this.handleClick();
      }
    }
    handleClick(){
      const x=document.getElementById(this.props.keyName);
      x.play();
      document.getElementById("display").innerHTML = this.props.display;
      document.getElementById("display").style.color= this.props.padColor2;

      this.setState((state) => ({bgcolor: !state.bgcolor}));
      setTimeout(function() {
        this.setState((state) => ({bgcolor: !state.bgcolor}));}.bind(this), 200);
    }
    render(){
      return (
        <div className="drum-pad col-xs-4" id={this.props.padId} onClick={this.handleClick} style={{backgroundColor: this.state.bgcolor ? this.props.padColor1: this.props.padColor2}}>
          {this.props.keyName}
          <audio className="clip" id={this.props.keyName} src={this.props.link} />
        </div>
      );
    }
  };
  class Drum extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      const drumPadsHtml=drumPads.map(v=><DrumPad padId={v.padId} keyName={v.keyName} link={v.link} padColor1={v.padColor1} padColor2={v.padColor2} display={v.display}/>);
      return (
        <div id="drum-machine">
          <div id="display">Let's Rock!
          </div>
          <div className="row">{drumPadsHtml}</div>
        </div>
      );
    }
  };
//   ReactDOM.render(<Drum />, document.getElementById("root"));
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
