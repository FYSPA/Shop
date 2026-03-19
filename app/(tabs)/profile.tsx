import { ScrollView, StyleSheet, View } from "react-native"; // Importa ScrollView
import CardOptions from "../../components/profile/CardOptions";
import CardUser from "../../components/profile/CardUser";
import CustomHeader from "../../components/ui/CustomHeader";

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <CustomHeader
                    title="Perfil"
                    rightIcon="logout"
                    onRightPress={() => console.log("Cerrar sesión")}
                />
                <CardUser />

                <View style={styles.line} />

                <CardOptions />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 25,
        paddingTop: 10,
        paddingBottom: 100,
        gap: 20,
    },
    line: {
        marginVertical: 10,
        height: 1,
        width: '100%',
        backgroundColor: '#E0E0E0',
    },
});