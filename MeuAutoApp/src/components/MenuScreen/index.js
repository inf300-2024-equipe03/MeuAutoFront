import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './style';

const MenuScreen = ({ navigation }) => {
	const menuItems = [
		{ icon: require('../../../assets/autoshop-icon.png'), label: 'Buscar Oficinas' },
		{ icon: require('../../../assets/cart-icon.png'), label: 'Comprar Peças' },
		{ icon: require('../../../assets/ai-icon.png'), label: 'Assistente Virtual' },
		{ icon: require('../../../assets/sos-icon.png'), label: 'Chamar Guincho' },
		{ icon: require('../../../assets/search-insu-icon.png'), label: 'Cotar Seguro' },
		{ icon: require('../../../assets/funcao6-icon.png'), label: 'Mais...' },
	];

	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
			<View style={styles.divider} />
			<Text style={styles.title}>O que você precisa?</Text>

			<View style={styles.grid}>
				{menuItems.map((item, index) => (
					<TouchableOpacity
						onPress={() => item.label === 'Buscar Oficinas' && navigation.navigate('BookingScreen')}
						key={index} style={styles.gridItem}
					>
						<Image source={item.icon} style={[styles.icon, item.label === 'Chamar Guincho' && styles.icon2]} resizeMode='contain' />
						<Text style={styles.gridLabel}>{item.label}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default MenuScreen;