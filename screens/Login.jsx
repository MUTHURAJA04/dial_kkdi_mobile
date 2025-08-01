import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { X } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

const Login = ({ type, onClose }) => {
  const navigation = useNavigation();
  const title = type === 'business' ? 'Business Login' : 'User Login';

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View className="flex-1 justify-center items-center px-6">
        {/* Title */}
        <Text className="text-2xl font-bold text-gray-800 mb-6">{title}</Text>

        {/* Email Input */}
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base text-gray-800"
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-base text-gray-800"
        />

        {/* Login Button */}
        <TouchableOpacity className="bg-orange-500 px-6 py-3 rounded-lg w-full mb-4">
          <Text className="text-white text-center text-base font-semibold"
           onPress={() => {
              if (type === 'business') {
                navigation.navigate('BusinessRegister');
              } else {
                navigation.navigate('Home');
              }
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        {/* Conditional Google SSO for User Login */}
        {type === 'user' && (
          <View className="w-full items-center mb-4">
            {/* Divider */}
            <View className="flex-row items-center w-full my-4">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-2 text-gray-500 text-sm">OR</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            {/* Google Login Button */}
            <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 px-6 py-3 rounded-lg w-full bg-white">
              <Text className="text-center text-base font-semibold text-gray-700">
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Register & Forgot Password */}
        <View className="flex-row justify-between items-center w-full mb-6">
          <TouchableOpacity
            onPress={() => {
              if (type === 'business') {
                navigation.navigate('BusinessRegister');
              } else {
                navigation.navigate('UserRegister');
              }
            }}
          >
            <Text className="text-sm text-orange-600">Don't have an account yet? Register</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-sm text-gray-600">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Close Button */}
      <View className="items-center mb-6">
        <TouchableOpacity
          onPress={onClose}
          className="flex-row items-center space-x-2"
        >
          <X color="#888" width={22} height={22} />
          <Text className="text-gray-600 text-sm">Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
