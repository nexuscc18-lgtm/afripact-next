'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search, Mail, Phone, Building2, Calendar, FileText,
  Filter, ArrowUpDown, Loader, AlertCircle, Home, LogOut,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

interface Submission {
  id: string;
  name: string;
  company: string | null;
  phone: string;
  email: string;
  message: string;
  service: string | null;
  submission_type: string;
  created_at: string;
}

export default function DashboardContent() {
  const { user, signOut, loading: authLoading } = useAuth();
  const router = useRouter();

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'contact' | 'quote'>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) fetchSubmissions();
  }, [user]);

  useEffect(() => {
    filterAndSortSubmissions();
  }, [submissions, searchTerm, filterType, sortOrder]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      if (fetchError) throw fetchError;
      setSubmissions(data || []);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortSubmissions = () => {
    let filtered = [...submissions];
    if (filterType !== 'all') filtered = filtered.filter((s) => s.submission_type === filterType);
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(term) ||
        s.email.toLowerCase().includes(term) ||
        s.company?.toLowerCase().includes(term) ||
        s.phone.includes(term) ||
        s.message.toLowerCase().includes(term),
      );
    }
    filtered.sort((a, b) => {
      const diff = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return sortOrder === 'desc' ? -diff : diff;
    });
    setFilteredSubmissions(filtered);
  };

  const formatDate = (dateString: string) =>
    new Intl.DateTimeFormat('en-ZA', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(dateString));

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (authLoading || (!user && !authLoading)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader className="w-12 h-12 text-orange-500 animate-spin" />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-700 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img src="/AfriPact.png" alt="Afripact Civils" className="h-16 w-auto" />
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-sm font-medium opacity-90">Welcome back, {user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/"
                className="bg-black/10 hover:bg-black/20 text-black px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-black">
                <Home className="w-4 h-4" />
                Back to Site
              </Link>
              <button onClick={handleSignOut}
                className="bg-black text-white hover:bg-gray-900 px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { label: 'Total Submissions', count: submissions.length, icon: FileText },
              { label: 'Contact Requests', count: submissions.filter((s) => s.submission_type === 'contact').length, icon: Mail },
              { label: 'Quote Requests', count: submissions.filter((s) => s.submission_type === 'quote').length, icon: FileText },
            ].map(({ label, count, icon: Icon }) => (
              <div key={label} className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">{label}</p>
                    <p className="text-3xl font-bold text-gray-900">{count}</p>
                  </div>
                  <Icon className="w-12 h-12 text-orange-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Search by name, email, company, or phone..."
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select value={filterType} onChange={(e) => setFilterType(e.target.value as 'all' | 'contact' | 'quote')}
                  className="pl-10 pr-8 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none bg-white">
                  <option value="all">All Types</option>
                  <option value="contact">Contact</option>
                  <option value="quote">Quote</option>
                </select>
              </div>
              <button onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all flex items-center gap-2 font-semibold text-gray-700">
                <ArrowUpDown className="w-5 h-5" />
                {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-medium">
                {searchTerm || filterType !== 'all' ? 'No submissions match your filters' : 'No submissions yet'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    {['Date', 'Name', 'Contact', 'Type', 'Service', 'Actions'].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />{formatDate(submission.created_at)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{submission.name}</div>
                        {submission.company && (
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Building2 className="w-3 h-3" />{submission.company}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <a href={`mailto:${submission.email}`} className="flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium">
                            <Mail className="w-4 h-4" />{submission.email}
                          </a>
                          <a href={`tel:${submission.phone}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-700">
                            <Phone className="w-4 h-4" />{submission.phone}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${submission.submission_type === 'quote' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'}`}>
                          {submission.submission_type.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{submission.service || 'General'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => setSelectedSubmission(submission)}
                          className="text-orange-500 hover:text-orange-600 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-3 py-1">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-yellow-500 p-6 rounded-t-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-1">Submission Details</h3>
                  <p className="text-black/80 font-medium">{formatDate(selectedSubmission.created_at)}</p>
                </div>
                <button onClick={() => setSelectedSubmission(null)}
                  className="text-black hover:bg-black/10 rounded-lg p-2 transition-colors">
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-1 block">Name</label>
                <p className="text-lg font-semibold text-gray-900">{selectedSubmission.name}</p>
              </div>
              {selectedSubmission.company && (
                <div>
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-1 block">Company</label>
                  <p className="text-lg font-semibold text-gray-900">{selectedSubmission.company}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-1 block">Email</label>
                  <a href={`mailto:${selectedSubmission.email}`} className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />{selectedSubmission.email}
                  </a>
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-1 block">Phone</label>
                  <a href={`tel:${selectedSubmission.phone}`} className="text-gray-900 hover:text-gray-700 font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4" />{selectedSubmission.phone}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-1 block">Type</label>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${selectedSubmission.submission_type === 'quote' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'}`}>
                    {selectedSubmission.submission_type.toUpperCase()}
                  </span>
                </div>
                {selectedSubmission.service && (
                  <div>
                    <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-1 block">Service Requested</label>
                    <p className="text-gray-900 font-medium">{selectedSubmission.service}</p>
                  </div>
                )}
              </div>
              <div>
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2 block">Message</label>
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                  <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
