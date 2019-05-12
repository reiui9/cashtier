import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import { AdMobRewarded } from 'react-native-admob';
import { Header } from "../components";


export default class Main extends Component<Props> {
  state = {
      id:'',
      tier:'',
      mycoin:0,
      todaycoin:0,
      todayearn:0,
      todayprize:0,
      promotion:0,
  }
  componentWillMount() {
    this.init();
    AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
    AdMobRewarded.setAdUnitID('ca-app-pub-4432414803296210/3646467630');
    AdMobRewarded.addEventListener('rewarded',
      (reward) => {
        console.log('AdMobRewarded => rewarded', reward)
        this.makeCoin()
      }
    );
    AdMobRewarded.addEventListener('adLoaded',
      () => console.log('AdMobRewarded => adLoaded')
    );
    AdMobRewarded.addEventListener('adFailedToLoad',
      (error) => console.warn(error)
    );
    AdMobRewarded.addEventListener('adOpened',
      () => console.log('AdMobRewarded => adOpened')
    );
    AdMobRewarded.addEventListener('videoStarted',
      () => console.log('AdMobRewarded => videoStarted')
    );
    AdMobRewarded.addEventListener('adClosed',
      () => {
        console.log('AdMobRewarded => adClosed');
        AdMobRewarded.requestAd().catch(error => console.warn(error));
      }
    );
    AdMobRewarded.addEventListener('adLeftApplication',
      () => console.log('AdMobRewarded => adLeftApplication')
    );
    AdMobRewarded.requestAd().catch(error => console.warn(error));
  }

  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
  }

  init() {
      this.setState({id: 'REIUI9'})
      this.setState({tier: '플랑크톤'})
  }

  showRewarded() {
    AdMobRewarded.showAd().catch(error => console.warn(error));
  }

  makeCoin() {
    this.setState({todaycoin: this.state.todaycoin + 1})
    console.log('todaycoin : ', this.state.todaycoin)
  }

  render() {
    return (
        <View style={styles.container}>
          <Header title="Main" />
          <View style={styles.userinfo}>
            <View style={styles.userinfo_inner}>
              <Text style={styles.text}>유저 아이디 : {this.state.id}</Text>
              <Text style={styles.text}>유저 티어 : {this.state.tier}</Text>
              <Text style={styles.text}>유저 보유 코인 : {this.state.mycoin}</Text>                    
            </View>
          </View>
          <View style={styles.states}>
            <View style={styles.states_inner}>               
              <View style={styles.row}>
                <View style={styles.war}>
                  <Text style={styles.text}>오늘 획득 코인 : {this.state.todaycoin}</Text>
                </View>
                <View style={styles.war}>
                  <TouchableOpacity style={styles.button} onPress={this.showRewarded}>
                    <Text style={styles.button_text}>코인 획득하기</Text>  
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.text}>오늘 이익 코인 : {this.state.todayearn}</Text>
            </View>
          </View>
          <View style={styles.events}>
            <View style={styles.events_inner}>
              <View style={styles.row}>                
                <View style={styles.war}>
                  <Text style={styles.text}>오늘 상금 코인 : {this.state.todayprize}</Text>
                </View>
                <View style={styles.war}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}>코인획득 참가하기</Text>  
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.row}>                
                <View style={styles.war}>
                  <Text style={styles.text}>진급 대상 : {this.state.promotion}</Text>
                </View>
                <View style={styles.war}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}>진급 신청하기</Text>  
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  userinfo: {
    flex: 1,
    backgroundColor: 'rgb(52, 73, 94)'
  },
  userinfo_inner: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(200, 211, 215)'
  },
  text: {
    flex: 1,
    textAlignVertical: "center"
  },
  states: {
    flex: 1,
    backgroundColor: 'rgb(52, 73, 94)'
  },
  states_inner: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(200, 211, 215)'
  },
  events: {
    flex: 1,
    backgroundColor: 'rgb(52, 73, 94)'
  },
  events_inner: {
    flex: 1, 
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(200, 211, 215)'
  },
  button: {
    paddingTop:5,
    paddingBottom:5,
    paddingRight:5,
    paddingLeft:5,
    color:'#fff',
    backgroundColor:'#68a0cf',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button_text: {
    textAlignVertical: "center"
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  war: {
    margin:20
  }
});