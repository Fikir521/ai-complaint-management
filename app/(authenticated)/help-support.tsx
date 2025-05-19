// app/(authenticated)/help-support.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const faqs = [
  {
    question: 'Who can use this system?',
    answer:
      'Anyone with a valid registration—such as customers of EEU—can use this system to submit complaints.',
  },
  {
    question: 'What is the AI assisted complaint management system?',
    answer:
      'It is a platform that allows customers to submit complaints, track their progress, and receive resolutions.',
  },
  {
    question: 'How do I register for an account?',
    answer:
      "Click 'register', fill in your details, verify your phone number via OTP, and log in.",
  },
  {
    question: 'What if I forget my password?',
    answer:
      "Click 'Forgot Password' on the login page, enter your phone number or email, and follow the reset instructions.",
  },
  {
    question: 'Can I update my profile details?',
    answer:
      "Yes, you can change your contact details in the 'Profile Settings'.",
  },
];

export default function HelpSupport() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Help & Support</Text>

      {/* FAQs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        {(showMore ? faqs : faqs.slice(0, 2)).map((faq, index) => (
          <TouchableOpacity
            key={index}
            style={styles.faqItem}
            onPress={() => toggleFAQ(index)}
          >
            <Text style={styles.question}>{faq.question}</Text>
            {expandedFAQ === index && (
              <Text style={styles.answer}>{faq.answer}</Text>
            )}
          </TouchableOpacity>
        ))}

        {!showMore && (
          <TouchableOpacity onPress={() => setShowMore(true)}>
            <Text style={styles.showMore}>Show more FAQs</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Contact Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Support</Text>

        <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput style={styles.input} placeholder="Subject" placeholderTextColor="#aaa" />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          multiline
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black', // 🔧 page background
    padding: 20,
    flex: 1,
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: 'white',
  },
  faqItem: {
    backgroundColor: '#1c1c1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  answer: {
    marginTop: 8,
    fontSize: 15,
    color: '#cccccc',
    lineHeight: 20,
  },
  showMore: {
    color: '#FF7A3D', // 🔧 goldenrod link
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
  input: {
    backgroundColor: '#1c1c1e',
    color: 'white',
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: '#444',
    borderWidth: 1,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF7A3D', // 🔧 goldenrod button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});





