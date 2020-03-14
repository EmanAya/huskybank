import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import { StyleSheet, 
    Image, 
    View, 
    Text, 
    Button, 
    ImagePickerIOS, 
    TouchableOpacity 
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


});


function Main() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
    </View>
  );
}


function LoanScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the StudentLoan!</Text>
    </View>
  );
}

function IncomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the IncomeScreen!</Text>
    </View>
  );
}

function SpendingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the SpendingScreen!</Text>
    </View>
  );
}

function ResourcesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the ResourcesScreen!</Text>
    </View>
  );
}

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent({ progress, ...rest}) {
    const translateX = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [-115, 0],
    });
  
    return (
      <DrawerContentScrollView {...rest}>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <DrawerItemList {...rest} />
        </Animated.View>
      </DrawerContentScrollView>
    );
  }
  
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
                  source={require('./MenuButton.png')}
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

function StudentLoan({navigation}){
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
                  source={require('./MenuButton.png')}
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

function Income({navigation}){
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
                  source={require('./MenuButton.png')}
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

function Spending({navigation}){
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
                  source={require('./MenuButton.png')}
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

function Resources({navigation}){
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
                  source={require('./MenuButton.png')}
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
        drawerStyle={{width:400}}
        drawerContentOptions={{
          backgroundColor: '#5A4A99',
          inactiveTintColor: '#fff',
          activeTintColor:'#5A4A99',
          activeBackgroundColor: '#A89B7B',
          itemStyle: { marginTop: 50},
          labelStyle: {fontSize:24},
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