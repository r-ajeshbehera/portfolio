import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, role, mobile, email, description, stars } = req.body;

  if (!name || !role || !mobile || !description || !stars) {
    return res.status(400).json({ error: 'All required fields must be provided' });
  }

  if (stars < 1 || stars > 5) {
    return res.status(400).json({ error: 'Stars must be between 1 and 5' });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  try {
    const { error } = await supabase.from('feedback').insert({
      name,
      role,
      mobile,
      email,
      description,
      stars,
      status: 'pending',
    });

    if (error) throw error;

    return res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return res.status(500).json({ error: 'Failed to submit feedback' });
  }
}