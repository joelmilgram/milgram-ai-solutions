import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cog, Users, Award, ExternalLink, Mail, Linkedin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="font-heading text-xl font-bold">Milgram AI Solutions</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#expertise" className="text-sm font-medium hover:text-primary transition-colors">
              Expertise
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Expérience
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  SASU Milgram AI Solutions
                </Badge>
                <h1 className="font-heading text-4xl lg:text-6xl font-bold text-balance">
                  Expert en <span className="text-primary">Automatisation Intelligente</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Plus de 30 ans d'expérience dans l'IA, le BPM, la RPA et l'automatisation des processus métiers. Je
                  vous accompagne dans vos défis d'automatisation intelligente.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-fit">
                  Découvrir mes services
                </Button>
                <Button variant="outline" size="lg" className="w-fit bg-transparent" asChild>
                  <a href="https://www.linkedin.com/in/milgram/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                <img
                  src="/joel.milgram.jpeg"
                  alt="Portrait professionnel"
                  className="rounded-xl shadow-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">Mon approche</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                J'accompagne et conseille mes clients dans leurs défis d'AUTOMATISATION INTELLIGENTE, quel que soit leur
                secteur d'activité. Curieux de nature et ouvert aux autres, je suis constamment à l'affût de projets
                ambitieux et de rencontres enrichissantes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Intelligence Artificielle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Passionné d'IA depuis les années 90, expert en IA générative et assistants métiers intelligents.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Automatisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Solutions BPM, RPA et règles métiers pour optimiser l'efficacité opérationnelle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Conseil Expert</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Accompagnement personnalisé pour atteindre vos objectifs d'automatisation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">Mon expertise</h2>
              <p className="text-lg text-muted-foreground">
                Plus de 30 ans d'expérience acquise dans diverses fonctions chez des éditeurs de logiciels
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Expert certifié PEGA INFINITY</span>
                    <Badge variant="secondary">Certifié</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Expert IBM BUSINESS AUTOMATION</span>
                    <Badge variant="secondary">Certifié</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Domaines d'expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Intelligence Artificielle</Badge>
                    <Badge variant="outline">Business Process Management</Badge>
                    <Badge variant="outline">Robotic Process Automation</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Règles métiers</Badge>
                    <Badge variant="outline">IA Générative</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">Mon parcours</h2>
              <p className="text-lg text-muted-foreground">
                Une expérience riche et diversifiée au service de l'innovation
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Chercheur en Intelligence Artificielle</CardTitle>
                  <CardDescription>EDF</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recherche et développement en IA appliquée aux systèmes énergétiques et à l'optimisation des
                    processus industriels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Consultant Technique Principal</CardTitle>
                  <CardDescription>Software AG • Lombardi • IBM • Pegasystems</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Développement, chefferie de projet, avant-vente, marketing et business development. Expérience
                    internationale en France et à l'étranger, auprès d'utilisateurs finaux et de partenaires.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold">Travaillons ensemble</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Vous avez un projet d'automatisation intelligente ? Discutons de la façon dont je peux vous aider à
                atteindre vos objectifs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:contact@milgram.fr">
                  <Mail className="mr-2 h-4 w-4" />
                  Me contacter
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/milgram/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-heading font-semibold">Milgram AI Solutions</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/milgram/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@milgram.fr"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 SASU Milgram AI Solutions. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
