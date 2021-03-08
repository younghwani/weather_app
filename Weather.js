import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#373B44", "#4286f4"],
		title: "Thunderstorm in the house",
		subtitle: "Actually, outside of the house",
	},
	Drizzle: {
		iconName: "weather-hail",
		gradient: ["#89F7FE", "#66A6FF"],
		title: "Drizzle",
		subtitle: "Is like rain, but gay 🏳️‍🌈",
	},
	Rain: {
		iconName: "weather-rainy",
		gradient: ["#00C6FB", "#005BEA"],
		title: "Raining like a MF",
		subtitle: "For more info look outside",
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#7DE2FC", "#B9B6E5"],
		title: "Cold as balls",
		subtitle: "Do you want to build a snowman? Nope.",
	},
	Atmosphere: {
		iconName: "weather-hail",
		gradient: ["#89F7FE", "#66A6FF"],
		title: "Atmosphere",
		subtitle: "What is Atmosphere?",
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#FF7300", "#FEF253"],
		title: "Sunny",
		subtitle: "Go outside and Enjoy your life!",
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#D7D2CC", "#304352"],
		title: "Clouds",
		subtitle: "I know, fucking boring",
	},
	Mist: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Mist!",
		subtitle: "It's like you have no glasses on.",
	},
	Dust: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Dusty",
		subtitle: "Thanks a lot China, fuck fuck fuck 🖕🏻",
	},
	Haze: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Haze",
		subtitle: "Just don't go outside.",
	},
};

export default function Weather({ temp, condition }) {
	return (
		<LinearGradient
			colors={
				!!weatherOptions[condition]
					? weatherOptions[condition].gradient
					: ["#f5af19", "#f12711"]
			}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					size={96}
					name={
						!!weatherOptions[condition]
							? weatherOptions[condition].iconName
							: "weather-sunset"
					}
					color="white"
				/>
				<Text style={styles.temp}>{temp}℃</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>
					{!!weatherOptions[condition]
						? weatherOptions[condition].title
						: "Title"}
				</Text>
				<Text style={styles.subtitle}>
					{!!weatherOptions[condition]
						? weatherOptions[condition].subtitle
						: "Subtitle"}
				</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Atmosphere",
		"Clear",
		"Clouds",
		"Haze",
		"Dust",
		"Mist",
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	temp: {
		fontSize: 42,
		color: "white",
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: "white",
		fontSize: 44,
		fontWeight: "300",
		marginBottom: 10,
	},
	subtitle: {
		fontWeight: "600",
		color: "white",
		fontSize: 24,
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: "flex-start",
	},
});
