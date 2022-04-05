// @app
import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
// @stack screens
import MyDrawer from '../navigation/drawer/sideDrawer';
import Search from '../screens/Main/Search';
import Like from '../screens/Main/PostAssets/Like';
import Comment from '../screens/Main/PostAssets/Comment';
import Notification from '../screens/Main/Notification';
import EditProfile from '../screens/Main/EditProfile';
import ProductDetail from '../screens/Main/ProductDetail';
import OtherProfile from '../screens/Main/OtherProfile';
import Followers from '../screens/Main/Followers';
import Following from '../screens/Main/Following';
import TermsCondition from '../screens/Main/CMS/TermsCondition';
import PrivacyPolicy from '../screens/Main/CMS/PrivacyPolicy';
import ChangePassword from '../screens/Main/ChangePassword';
import UsersForChat from '../screens/Main/Chat/Users';
import MessagesOfUsers from '../screens/Main/Chat/Messages';
import SelectTopic from '../screens/Main/SelectTopic';
import Quiz from '../screens/Main/Quiz';
import StudyAbroad from '../screens/Main/StudyAbroad';
import TopicDetail from '../screens/Main/Topic/TopicDetail';
import QADetail from '../screens/Main/QA/QaDetail';
import CreatePost from '../screens/Main/CreatePost';

const RootStack = createStackNavigator();

const navigation = ({}) => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name={'Home'}
        component={MyDrawer}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Notification"
        component={Notification}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="EditProfile"
        component={EditProfile}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="OtherProfile"
        component={OtherProfile}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Followers"
        component={Followers}
      />
      <RootStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Following"
        component={Following}
      />
      <RootStack.Screen
        name="Like"
        component={Like}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="Comment"
        component={Comment}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="Search"
        component={Search}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="UsersForChat"
        component={UsersForChat}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="MessagesOfUsers"
        component={MessagesOfUsers}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="SelectTopic"
        component={SelectTopic}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="StudyAbroad"
        component={StudyAbroad}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="TopicDetail"
        component={TopicDetail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="QADetail"
        component={QADetail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <RootStack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </RootStack.Navigator>
  );
};

export default navigation;
