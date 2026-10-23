"use client";

import { useState } from 'react';
import { siteConfig } from '@/data/config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    botcheck: '', // Honeypot anti-spam
  });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis.';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Veuillez saisir un nom valide (au moins 2 caractères).';
      isValid = false;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Veuillez entrer une adresse e-mail valide.';
      isValid = false;
    }

    if (formData.phone.trim() && !/^[+0-9\s\-().]{6,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Veuillez entrer un numéro de téléphone valide.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message ne peut pas être vide.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Veuillez préciser votre besoin (au moins 10 caractères).';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return; // Anti-double soumission
    setErrorMessage('');

    if (!validate()) return;

    // Si le champ honeypot est rempli par un robot, on simule un succès sans envoyer
    if (formData.botcheck) {
      setStatus('success');
      return;
    }

    setStatus('submitting');

    const accessKey = siteConfig.web3FormsKey;

    if (accessKey) {
      try {
        const payload = {
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || 'Non renseigné',
          message: formData.message.trim(),
          subject: `Nouvelle demande de devis : ${formData.name.trim()}`,
          from_name: "Portfolio Emmanuel Okou",
        };

        const response = await fetch(siteConfig.contactFormEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setStatus('success');
        } else {
          setErrorMessage(
            result.message ||
              "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement par WhatsApp."
          );
          setStatus('idle');
        }
      } catch {
        setErrorMessage(
          "Impossible de joindre le serveur d'envoi. Veuillez vérifier votre connexion ou m'écrire directement sur WhatsApp."
        );
        setStatus('idle');
      }
    } else {
      // Si la clé n'est pas encore renseignée, bascule propre vers WhatsApp ou Mailto
      const directSubject = encodeURIComponent(`Nouveau contact - ${formData.name}`);
      const directBody = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone || 'Non renseigné'}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${directSubject}&body=${directBody}`;
      setStatus('success');
    }
  };

  // Envoi direct via WhatsApp après avoir rempli les champs
  const handleDirectWhatsApp = () => {
    const textLines = [
      `*Nouveau message depuis le portfolio :*`,
      `*Nom :* ${formData.name.trim() || 'Visiteur'}`,
    ];
    if (formData.email.trim()) textLines.push(`*Email :* ${formData.email.trim()}`);
    if (formData.phone.trim()) textLines.push(`*Téléphone :* ${formData.phone.trim()}`);
    if (formData.message.trim()) textLines.push(`*Besoin :* ${formData.message.trim()}`);
    else textLines.push(`Bonjour Emmanuel, je souhaite échanger au sujet d'un projet.`);

    const encoded = encodeURIComponent(textLines.join('\n'));
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* Informations de contact */}
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4 md:mb-6">
            Discutons de votre <span className="text-[var(--primary)]">projet</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)] mb-8 md:mb-12">
            Que vous ayez besoin d&apos;une vitrine web moderne, d&apos;une production visuelle ou d&apos;une intégration IA, je suis à votre disposition pour concrétiser votre vision.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">E-mail</h3>
              <a href={`mailto:${siteConfig.email}`} className="text-xl font-medium hover:text-[var(--primary)] transition-colors">
                {siteConfig.email}
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Téléphone</h3>
              <a href={`tel:${siteConfig.phone}`} className="text-xl font-medium hover:text-[var(--primary)] transition-colors">
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">WhatsApp Direct</h3>
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-lg hover:underline underline-offset-4"
              >
                <span>💬 Démarrer une conversation WhatsApp &rarr;</span>
              </button>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Réseaux Sociaux</h3>
              <div className="flex gap-4">
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors underline underline-offset-4">
                  LinkedIn
                </a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors underline underline-offset-4">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-[var(--card)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] shadow-xl">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Demande transmise avec succès</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed max-w-md">
                Merci pour votre message ! J&apos;ai bien reçu vos coordonnées et je reviendrai vers vous dans les plus brefs délais.
                <br /><br />
                Pour un échange immédiat, vous pouvez également me joindre en direct sur WhatsApp.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button 
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', phone: '', message: '', botcheck: '' });
                  }}
                  className="border border-[var(--border)] text-[var(--foreground)] px-6 py-2.5 rounded-lg font-medium hover:bg-[var(--card)] transition-colors"
                >
                  Envoyer un autre message
                </button>
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="bg-[#25D366] text-white px-6 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Échanger sur WhatsApp &rarr;
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Message d'erreur global */}
              {errorMessage && (
                <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-sm flex items-start gap-3">
                  <span className="text-lg leading-none">⚠️</span>
                  <div className="flex-1">{errorMessage}</div>
                </div>
              )}

              {/* Champ Honeypot masqué aux humains pour piéger les bots */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                checked={!!formData.botcheck}
                onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? 'bot' : '' })}
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Nom complet <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-[var(--background)] border ${errors.name ? 'border-red-500' : 'border-[var(--border)]'} rounded-lg px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors`}
                  placeholder="Ex : Jean Koffi"
                  disabled={status === 'submitting'}
                  required
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Adresse E-mail <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-[var(--background)] border ${errors.email ? 'border-red-500' : 'border-[var(--border)]'} rounded-lg px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors`}
                  placeholder="jean@entreprise.com"
                  disabled={status === 'submitting'}
                  required
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)]">
                    Numéro de Téléphone / WhatsApp
                  </label>
                  <span className="text-xs text-[var(--muted-foreground)]">Optionnel</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full bg-[var(--background)] border ${errors.phone ? 'border-red-500' : 'border-[var(--border)]'} rounded-lg px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors`}
                  placeholder="+225 07 00 00 00 00"
                  disabled={status === 'submitting'}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Votre message ou besoin <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-[var(--background)] border ${errors.message ? 'border-red-500' : 'border-[var(--border)]'} rounded-lg px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none`}
                  placeholder="Précisez votre projet, vos objectifs et vos délais..."
                  disabled={status === 'submitting'}
                  required
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              {/* Actions : Soumettre ou Basculer sur WhatsApp */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] font-bold rounded-lg px-4 py-3.5 hover:opacity-95 transition-all disabled:opacity-50 flex justify-center items-center gap-2 shadow-md hover:shadow-lg"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                      <span>Transmission en cours...</span>
                    </>
                  ) : (
                    "Envoyer la demande par e-mail"
                  )}
                </button>

                <div className="relative flex items-center justify-center my-3">
                  <div className="border-t border-[var(--border)] w-full"></div>
                  <span className="bg-[var(--card)] px-3 text-xs text-[var(--muted-foreground)] uppercase">ou</span>
                  <div className="border-t border-[var(--border)] w-full"></div>
                </div>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  disabled={status === 'submitting'}
                  className="w-full bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 font-semibold rounded-lg px-4 py-3 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <span>💬 Envoyer directement sur WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
