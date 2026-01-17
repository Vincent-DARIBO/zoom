import { Stack, Link } from 'expo-router';

import { ScrollView, StyleSheet, View } from 'react-native';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import Head from 'expo-router/head';
export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      <ScrollView>
        <Container>

          <Head>
            <title>Pommes de pin : origine, usages et bienfaits naturels</title>

            <meta name="description" content="Découvrez tout sur les pommes de pin : définition, origine, usages décoratifs, bienfaits écologiques et idées créatives. Guide complet et naturel." />
            <meta name="keywords" content="pommes de pin, pommes de pain, cônes de pin, nature, décoration naturelle, forêt, écologie" />
            <meta name="author" content="Vincent" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta property="og:title" content="Pommes de pin : origine, usages et bienfaits naturels" />
            <meta property="og:description" content="Guide complet sur les pommes de pin : usages, écologie, décoration et curiosités naturelles." />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="fr_FR" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />


          </Head>

          <header>
            <h1>Les pommes de pin : trésors naturels des forêts</h1>
            <p>Origine, usages, bienfaits et curiosités autour des pommes de pain</p>
          </header>

          <main>
            <article>
              <section>
                <h2>Qu’est-ce qu’une pomme de pin ?</h2>
                <p>
                  La <strong>pomme de pin</strong>, aussi appelée <strong>pomme de pain</strong>, est le cône produit par les conifères tels que le pin, le sapin ou l’épicéa.
                  Contrairement à un fruit classique, elle joue un rôle essentiel dans la reproduction des arbres en protégeant les graines.
                </p>
              </section>

              <section>
                <h2>Origine et rôle dans la nature</h2>
                <p>
                  Présentes dans la plupart des forêts tempérées et méditerranéennes, les pommes de pin permettent la dispersion des graines.
                  Elles s’ouvrent et se ferment naturellement en fonction de l’humidité, un mécanisme fascinant lié à leur structure.
                </p>
              </section>

              <section>
                <h2>Les usages des pommes de pin</h2>
                <ul>
                  <li><strong>Décoration naturelle</strong> : centres de table, couronnes, décorations de Noël</li>
                  <li><strong>Allume-feu écologique</strong> : excellente combustion lorsqu’elles sont sèches</li>
                  <li><strong>Loisirs créatifs</strong> : bricolage, activités éducatives pour enfants</li>
                  <li><strong>Paillage naturel</strong> : protection des sols en jardinage</li>
                </ul>
              </section>

              <section>
                <h2>Bienfaits écologiques</h2>
                <p>
                  Les pommes de pin participent à l’équilibre des écosystèmes forestiers. Elles nourrissent certains animaux,
                  favorisent la régénération des forêts et servent d’abri à de nombreux insectes.
                </p>
              </section>

              <section>
                <h2>Faits insolites sur les pommes de pin</h2>
                <ul>
                  <li>Elles réagissent à l’humidité sans mécanisme vivant</li>
                  <li>Certaines espèces peuvent mesurer plus de 40 cm</li>
                  <li>Elles sont utilisées comme indicateurs météorologiques naturels</li>
                </ul>
              </section>

              <section>
                <h2>Pourquoi s’intéresser aux pommes de pain ?</h2>
                <p>
                  Simples en apparence, les pommes de pin sont de véritables merveilles de la nature.
                  Elles allient esthétique, utilité et intelligence biologique, tout en étant facilement accessibles.
                </p>
              </section>
            </article>
          </main>

          <footer>
            <p>© 2026 – Article informatif sur les pommes de pin • Nature & écologie</p>
          </footer>


        </Container>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
