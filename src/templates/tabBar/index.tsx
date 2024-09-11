/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route: { key: string | number; name: any; params: any; }, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                let iconName;
                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Settings') {
                    iconName = 'settings';
                } else if (route.name === 'Game Hub') {
                    iconName = 'rocket';
                } else {
                    iconName = 'schedule';
                }

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        key={index}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            padding: 10,
                            display: 'flex',
                            backgroundColor: isFocused ? '#d82c2c' : '#fff',
                            alignItems: 'center',
                            marginHorizontal: 2,
                            marginVertical: 5,
                            borderRadius: 18,
                            borderColor: isFocused ? '#d82c2c' : '#fff',
                            elevation: 2,
                        }}
                    >
                        <Icon name={iconName} size={20} color={isFocused ? '#fff' : '#000'} />
                        <Text style={{ fontSize: 12, fontFamily: 'OpenSans_SemiCondensed-Regular', color: isFocused ? '#fff' : '#000', fontWeight: '500' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default MyTabBar;
