import React from 'react';
import {
    ApplicationProvider,
    Layout,
    Text,
    BottomNavigation,
    BottomNavigationTab,
    Card,
    CardHeader
} from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import {Image, StyleSheet, ImageBackground, ScrollView,SafeAreaView} from "react-native";
import Background from './assets/images/huskybackground.png'
import bone from './assets/images/bone-4.png'
import donut from './assets/images/donut.png'
import dog from './assets/images/huskydog.png'

//define styles to be used in the various components.
const styles = StyleSheet.create({
    container: { },
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity:1,
        width: '100%',
    },
    headerText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardText:{
        color:'white'
    },
    cardBackground: {
        backgroundColor: '#5B4A99'
    },


});

const Banner = () => (
    <Layout style={{flex: .5, flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginTop: 50 }}>
        {/*<Image  style={styles.backgroundImage} source={Background}/>*/}
        <Text category='h1'>HuskyApp</Text>
    </Layout>
);

const LoansCard = () => {

    const header = ()=> (<CardHeader>
        <Text style={styles.headerText}>Student Loans</Text>
        <Text style={{...styles.headerText, justifyContent: 'flex-end'}}>$500</Text>
    </CardHeader>);

    return <Layout style={{marginBottom: 20, marginRight: 15, marginLeft: 15}}>
        <Card header={header} style={styles.cardBackground} >
            <Image source={bone}  />
        </Card>
    </Layout>
};

const IncomeCard = () => {
    const header = ()=> (<CardHeader>
        <Text style={styles.headerText}>Income</Text>
    </CardHeader>);

    return <Layout style={{marginBottom: 20, marginRight: 15, marginLeft: 15}}>
        <Card header={header} style={styles.cardBackground} >
            <Text style={styles.cardText}>Some info to be added here soon</Text>
        </Card>
    </Layout>
}

const SpendingCard = () => {
    const header = ()=> (<CardHeader>
        <Text style={styles.headerText}>Spending</Text>
    </CardHeader>);

    return <Layout style={{marginRight: 15, marginLeft: 15}}>
        <Card header={header} style={styles.cardBackground} >
            <Image source={donut} resizeMode={'center'} />
        </Card>
    </Layout>
}

const App = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return <ApplicationProvider mapping={mapping} theme={lightTheme} style={styles.container}>
        {/*<SafeAreaView>*/}
        <ScrollView style={{flex: 1, flexDirection: 'column'}}>
            <Image  style={styles.backgroundImage} source={Background}/>
            <Banner/>
            <LoansCard/>
            <IncomeCard/>
            <SpendingCard/>

            {/*</ImageBackground>*/}
        </ScrollView>
        {/*</SafeAreaView>*/}
        <BottomNavigation selectedIndex={selectedIndex}
                          onSelect={setSelectedIndex}>
            <BottomNavigationTab title='Overview'/>
            <BottomNavigationTab title='Goals'/>
            <BottomNavigationTab title='Loans'/>
        </BottomNavigation>


    </ApplicationProvider>
};

export default App;