import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import { Avatar, Card, Button, Title, Paragraph, Divider } from 'react-native-paper';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
  ImagePickerIOS,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const styles = StyleSheet.create({
  ButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
    marginLeft: 13,
    marginBottom: 5,
  },
  TextStyle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 5,
  },

  backgroundContainer: {
    position: 'absolute',
    width: 330,
    height: screenHeight,
  },

  overlay: {
    opacity: 1,
    backgroundColor: 'transparent',
    height: 200,
    width: 150,
    top: 100,

  },
});

//editing the main body page
function Main() {
  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View>
        <Image style={{ top: 0, left: 0, bottom: 0, right: 0, height: screenHeight, width: screenWidth, position: 'absolute' }}
          source={require('./assets/images/background.png')}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>

        <Text style={{ top: 50, fontSize: 30, color: '#5A4A99', textAlign: 'center' }}>"Welcome Back!"</Text>
        <Text style={{ top: 50, fontSize: 30, color: '#5A4A99', textAlign: 'center' }}>*ruff*</Text>

        <View style={{ left: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ top: 50, height: 300, width: 240, justifyContent: 'center', alignItems: 'center' }}
            source={require('./assets/images/HuskyModel.png')} />
        </View>



        <Card
          style={{ borderRadius: '20', backgroundColor: '#5A4A99', top: 100, width: 400, marginLeft: 7 }}>
          <Card.Title rowContainer={{ flexDirection: 'row' }} titleStyle={{ color: '#fff' }} title="Student Loans:  $5000"></Card.Title>
          <Divider style={{ backgroundColor: '#fff', height: 1 }} />
          <Card.Content>
            <Image
              source={require('./assets/images/bone.png')} />
          </Card.Content>
        </Card>


        <Card style={{ borderRadius: '20', backgroundColor: '#5A4A99', marginTop: 130, width: 400, left: 7 }}>
          <Card.Title titleStyle={{ color: '#fff', marginTop: 5, marginLeft: 10, fontSize: 30 }} title="Income" />
          <Divider style={{ backgroundColor: '#fff', height: 1 }} />
          <Card.Content>
            <View rowContainer={{ alignItems: 'center' }}>
              <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 25, color: '#fff' }}>Credit:
                <Text>                        $1000</Text>
              </Text>
              <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 25, color: '#fff' }}>Debit:
                <Text>                        $5000</Text>
              </Text>
              <Text style={{ textAlign: 'center', marginBottom: 10, marginTop: 20, fontSize: 25, color: '#fff' }}>Cash:
                <Text>                         $1500</Text>
              </Text>
            </View>

          </Card.Content>
        </Card>

        <Card style={{ borderRadius: '20', backgroundColor: '#5A4A99', width: 400, marginTop: 30, marginBottom: 100, marginLeft: 7, }}>
          <Card.Title rowContainer={{ flexDirection: 'row' }} titleStyle={{ color: '#fff', marginTop: 5, marginLeft: 10, fontSize: 30 }} title="Spending"></Card.Title>
          <Divider style={{ backgroundColor: '#fff', height: 1 }} />
          <Card.Content>
            <View rowContainer={{ alignItems: 'center' }}>
              <Image style={{ marginLeft: screenWidth / 16, height: 300, width: 300 }}
                source={require('./assets/images/donut.png')} />
            </View>
          </Card.Content>
        </Card>

      </ScrollView>
    </View>
  );
}

//editing the student loan page
function LoanScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ height: screenHeight, width: screenWidth, position: 'absolute' }}
        source={require('./assets/images/background.png')}
      />
      <ScrollView style={{ flex: 1, height: screenHeight }}>

        <Card
          style={{ borderRadius: '20', backgroundColor: '#5A4A99', top: 30, width: 400, marginLeft: 1 }}>
          <Card.Title rowContainer={{ flexDirection: 'center' }}
            titleStyle={{ color: '#fff', width: screenWidth, fontSize: 30, top: 5, marginLeft: screenWidth / 5, marginRight: 10 }} title="Student Loans"></Card.Title>
          <Divider style={{ backgroundColor: '#fff', height: 1 }} />
          <Card.Content>
            <View style={{ width: screenWidth }}>
              <Text style={{ color: '#fff', fontSize: 20, top: 25, bottom: 0, marginLeft: screenWidth / 4.5, marginTop: 30 }}> $5000  /  $10000</Text>
              <Image
                source={require('./assets/images/bone.png')}
                style={{ marginBottom: 30 }} />
            </View>
          </Card.Content>
        </Card>

        <View style={{ backgroundColor: '#5A4A99', width: 110, height: 35, borderRadius: 15, top: 50, left: screenWidth / 3 + 10 }}>
          <TouchableOpacity
            style={{}}
            activeOpacity={0.5}>
            <Text style={{ top: 4, color: '#fff', fontSize: 20, marginLeft: 19 }}> Update </Text>
          </TouchableOpacity>
        </View>

        <View style={{top:50, width:140, marginTop: 20, flexWrap:'nowrap',flexDirection:"row"}}>
          <Text style={{ left: 40,width: 150, marginBottom: 0, fontSize: 20, color: '#5A4A99' }}>
            “You haven’t updated this page in a while..” *ruff*
            </Text>
        </View>
        <View>
            <Image
              style={{marginLeft:180,height: 280, width: 220 }}
              source={require('./assets/images/HuskyModel.png')} />
          </View>

      </ScrollView>
    </View>
  );
}

function IncomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ height: screenHeight, width: screenWidth, position: 'absolute' }}
        source={require('./assets/images/background.png')}
      />
      <Text style={{ fontSize: 30 }}>This is the IncomeScreen!</Text>
    </View>
  );
}

//editing the spending page
function SpendingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ height: screenHeight, width: screenWidth, position: 'absolute' }}
        source={require('./assets/images/background.png')}
      />
      <Text style={{ fontSize: 30 }}>This is the SpendingScreen!</Text>
    </View>
  );
}

//editing the Resource page
function ResourcesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ height: screenHeight, width: screenWidth, position: 'absolute' }}
        source={require('./assets/images/background.png')}
      />
      <Text style={{ fontSize: 30 }}>This is the ResourcesScreen!</Text>
    </View>
  );
}

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

//this is the css for drawer nav bar
function CustomDrawerContent({ progress, ...rest }) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-125, 0],
  });

  return (

    <View >
      <View style={styles.backgroundContainer}>
        <Image style={{ height: screenHeight * 11 / 10, width: 330 }}
          source={require('./assets/images/background.png')}
        />

      </View>

      <View style={styles.overlay} />

      <View style={{ backgroundColor: '#5A4A99', height: screenHeight, borderRadius: 23 }}>

        <Image style={{ bottom: 135, left: 10, height: 150, width: 150 }}
          source={require('./assets/images/MenuLogo.png')} />

        <Text style={{ bottom: 205, fontSize: 40, left: 210, color: '#5A4A99' }}>Menu</Text>

        <DrawerContentScrollView {...rest} style={{ bottom: 180 }}>
          <Animated.View style={{ transform: [{ translateX }] }}>
            <DrawerItemList {...rest} />
          </Animated.View>
        </DrawerContentScrollView>

      </View>

    </View>
  );
}

//do not edit these codes below unless you want to customize your own nav bar
//main page nav bar
function Homepage({ navigation }) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name=" "
        component={Main}
        options={{
          headerStyle: {
            backgroundColor: '#5A4A99',
          },
          headerLeft: () => (

            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
              <Image
                source={require('./assets/images/MenuButton.png')}
              />
              <Text style={styles.TextStyle}> Menu </Text>
            </TouchableOpacity>

          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </MainStack.Navigator>
  );
}

//StudentLoan page nav bar
function StudentLoan({ navigation }) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name=" "
        component={LoanScreen}
        options={{
          headerStyle: {
            backgroundColor: '#5A4A99',
          },
          headerLeft: () => (

            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
              <Image
                source={require('./assets/images/MenuButton.png')}
              />
              <Text style={styles.TextStyle}> Menu </Text>
            </TouchableOpacity>

          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </MainStack.Navigator>
  );
}

//Income page nav bar
function Income({ navigation }) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name=" "
        component={IncomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#5A4A99',
          },
          headerLeft: () => (

            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
              <Image
                source={require('./assets/images/MenuButton.png')}
              />
              <Text style={styles.TextStyle}> Menu </Text>
            </TouchableOpacity>

          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </MainStack.Navigator>
  );
}

//spending page nav bar
function Spending({ navigation }) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name=" "
        component={SpendingScreen}
        options={{
          headerStyle: {
            backgroundColor: '#5A4A99',
          },
          headerLeft: () => (

            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
              <Image
                source={require('./assets/images/MenuButton.png')}
              />
              <Text style={styles.TextStyle}> Menu </Text>
            </TouchableOpacity>

          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </MainStack.Navigator>
  );
}

//resource page nav bar
function Resources({ navigation }) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name=" "
        component={ResourcesScreen}
        options={{
          headerStyle: {
            backgroundColor: '#5A4A99',
          },
          headerLeft: () => (

            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
              <Image
                source={require('./assets/images/MenuButton.png')}
              />
              <Text style={styles.TextStyle}> Menu </Text>
            </TouchableOpacity>

          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </MainStack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => CustomDrawerContent(props)}
        drawerStyle={{ width: 330 }}
        drawerContentOptions={{
          backgroundColor: '#5A4A99',
          inactiveTintColor: '#fff',
          activeTintColor: '#5A4A99',
          activeBackgroundColor: '#A89B7B',
          itemStyle: { marginTop: 0 },
          labelStyle: { fontSize: 24 },
        }}>
        <Drawer.Screen name="Home Screen" component={Homepage} />
        <Drawer.Screen name="Student Loan" component={StudentLoan} />
        <Drawer.Screen name="Income" component={Income} />
        <Drawer.Screen name="Spending" component={Spending} />
        <Drawer.Screen name="Resources" component={Resources} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}