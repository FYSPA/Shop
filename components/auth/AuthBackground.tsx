import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

interface Props {
  children: React.ReactNode;
  isLightOn?: boolean;
}

const { width, height } = Dimensions.get('window');

export default function AuthBackground({ children, isLightOn = false }: Props) {
  return (
    <ImageBackground
      // Imagen de un salón moderno para que combine con tu tienda de muebles
      source={{ uri: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop' }}
      style={styles.container}
    >
      {/* 1. Capa de oscurecimiento global */}
      <View style={[styles.overlay, isLightOn && styles.overlayLight]}>
        
        {/* 2. EL HAZ DE LUZ (Detrás del formulario) */}
        {isLightOn && (
          <View style={styles.lightBeam} />
        )}

        {/* 3. CONTENIDO DEL FORMULARIO (Encima de la luz) */}
        <View style={styles.contentContainer}>
          {children}
        </View>

        {/* 4. LA LÁMPARA FÍSICA (Colgada al frente de todo) */}
        {/* pointerEvents="none" permite que el usuario toque lo que hay debajo de la lámpara */}
        <View style={styles.lampPosition} pointerEvents="none">
          {/* Cable fino */}
          <View style={styles.cable} />
          
          {/* Campana moderna estilo nórdico */}
          <View style={[styles.lampShade, isLightOn && styles.lampShadeActive]}>
             {/* El foco que brilla */}
             <View style={[styles.bulb, isLightOn && styles.bulbActive]} />
          </View>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.85)', // Muy oscuro cuando la luz está apagada
  },
  overlayLight: {
    backgroundColor: 'rgba(0,0,0,0.65)', // Se aclara un poco al prender la luz
  },
  contentContainer: {
    flex: 1,
    zIndex: 2, // Por encima de la luz amarilla
    justifyContent: 'center',
  },
  lampPosition: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10, // La lámpara física está frente a todo lo visual
  },
  cable: {
    width: 2,
    height: height * 0.1, // El cable ocupa el 10% de la pantalla
    backgroundColor: '#111',
  },
  lampShade: {
    width: 100,
    height: 50,
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: '#222',
  },
  lampShadeActive: {
    backgroundColor: '#252525',
    borderColor: '#333',
  },
  bulb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  bulbActive: {
    backgroundColor: '#FFF',
    // Brillo intenso en el foco
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 15,
  },
  lightBeam: {
    position: 'absolute',
    top: height * 0.15, // Empieza debajo de la campana
    alignSelf: 'center',
    width: width * 1.5, // Muy ancho para que se vea difuminado
    height: height,
    backgroundColor: 'rgba(255, 230, 150, 0.15)', // Luz cálida suave
    borderRadius: width,
    zIndex: 1, // Capa más baja (detrás de todo)
    
    // Suavizado del haz de luz
    shadowColor: "#FFD700",
    shadowRadius: 150,
    shadowOpacity: 0.5,
    elevation: 30, // Para Android
  }
});