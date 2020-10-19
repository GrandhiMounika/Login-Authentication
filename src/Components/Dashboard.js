import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Dashboard.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Lloyds from './Lloyds.png';
import BOS from './BOS.png';
import Halifax from './Halifax.png';
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
    this.state={
      isLoggedIn:1
    };
  }
  handleLogout(username,password,isLoggedIn){
      if(isLoggedIn==="0")
        this.setState({isLoggedIn:1});
      else{
        this.setState({isLoggedIn:0});
        this.props.history.push("/")
      }
    }
    render() {
      return (
          <div className="dashboard">
          <AppBar position="static">
        <Toolbar> 
          <ExitToAppIcon onClick={this.handleLogout}/>
        </Toolbar>
      </AppBar>
      <div class="row">
      <div class="col-sm-4">
      <Card className="cards">
      <CardHeader title="Lloyds"/>
      <CardMedia className="media">
      <img src={Lloyds}/>
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Lloyds Banking Group plc is a major British financial institution formed through the acquisition of HBOS by Lloyds TSB in 2009. The Group's history stems from the founding in 1695 by the Parliament of Scotland of the Bank of Scotland, which is the fifth oldest bank in the United Kingdom.Its headquarters for business in the European Union is in Berlin. 
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div class="col-sm-4">
    <Card className="cards">
      <CardHeader title="BOS"/>
      <CardMedia className="media">
      <img src={BOS}/>
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        BoS Ia also a wholly owned subsidiary of LBG and similarly engages In fund management activities on behalf of
        a renge of Internal and external clients Including LBG's retan life, pensions and Investment products.Today, Bank of Scotland proudly continues to support the people, businesses and communities of Scotland.
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div class="col-sm-4">
    <Card className="cards">
      <CardHeader title="Halifax"/>
      <CardMedia className="media">
      <img src={Halifax}/>
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Founded in 1852, the Halifax is one of the UK's best known companies.
        It has enjoyed phenomenal growth over the course of its 160-year history. In the latter years of the 20th century, it made a number of notable acquisitions. These included the Leeds Permanent, Clerical Medical and Birmingham Midshires.It is located in UK
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </div>
        );
    }
}
export default Dashboard;