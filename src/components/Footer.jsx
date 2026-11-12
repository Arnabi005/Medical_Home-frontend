import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  HeartPulse,
  ArrowUp,
  Users,
  Calendar,
  Building2,
  LogIn,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-footer relative z-10 mt-12">
      {/* Subtle Top Gradient Accent Matching Cyan-Teal Capsules & Light Blue Theme */}
      <div
        className="h-[3px] w-full"
        style={{
          background:
            'linear-gradient(90deg, #0ea5e9 0%, #22b8cf 50%, #0369a1 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        {/* Main 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-cyan-100/90">
          
          {/* Column 1: Brand Identity & Clinical Standards */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2.5 group">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-2xl text-white shadow-md shrink-0 group-hover:scale-105 transition-transform"
                style={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #0891b2 100%)',
                }}
              >
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                  Medi<span className="text-sky-600">Core</span>
                </span>
                <span className="text-[10px] tracking-widest font-extrabold uppercase mt-0.5 text-cyan-700">
                  Hospital System
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              Connected, secure clinical care platform uniting patients, medical specialists,
              scheduling operations, and digital health records under one roof.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-50/90 text-sky-800 border border-sky-200/80">
                <ShieldCheck className="w-3 h-3 mr-1 text-sky-600" />
                HIPAA Ready
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-50/90 text-cyan-800 border border-cyan-200/80">
                24/7 Clinical Care
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Portals */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider mb-3.5 text-sky-900">
              Hospital Portals
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center text-slate-600 hover:text-sky-700 font-medium transition-colors"
                >
                  <HeartPulse className="w-3.5 h-3.5 mr-2 text-cyan-600" />
                  Home Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/patients"
                  className="inline-flex items-center text-slate-600 hover:text-sky-700 font-medium transition-colors"
                >
                  <Users className="w-3.5 h-3.5 mr-2 text-cyan-600" />
                  Patient Management
                </Link>
              </li>
              <li>
                <Link
                  to="/appointments"
                  className="inline-flex items-center text-slate-600 hover:text-sky-700 font-medium transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2 text-cyan-600" />
                  Appointments &amp; Slots
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="inline-flex items-center text-slate-600 hover:text-sky-700 font-medium transition-colors"
                >
                  <Building2 className="w-3.5 h-3.5 mr-2 text-cyan-600" />
                  Hospital Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="inline-flex items-center text-slate-600 hover:text-sky-700 font-medium transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5 mr-2 text-cyan-600" />
                  Staff &amp; Patient Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Hours & Departments */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider mb-3.5 text-sky-900">
              Care Hours &amp; Units
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-cyan-600" />
                <div>
                  <p className="font-semibold text-slate-800">Emergency &amp; Trauma</p>
                  <p className="text-[11px] text-slate-500">Open 24 Hours &bull; All Days</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-sky-600" />
                <div>
                  <p className="font-semibold text-slate-800">Outpatient (OPD) Clinic</p>
                  <p className="text-[11px] text-slate-500">Mon – Sat: 8:00 AM – 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-sky-600" />
                <div>
                  <p className="font-semibold text-slate-800">MediCore Medical Plaza</p>
                  <p className="text-[11px] text-slate-500">Park Street Health Hub, Kolkata</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: 24/7 Emergency Contact Card */}
          <div
            className="rounded-2xl p-4 border shadow-xs flex flex-col justify-between space-y-3"
            style={{
              background:
                'linear-gradient(145deg, rgba(236, 254, 255, 0.9) 0%, rgba(240, 249, 255, 0.92) 100%)',
              borderColor: 'rgba(165, 243, 252, 0.9)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center text-[11px] font-extrabold uppercase tracking-wider text-neonrose-600">
                  <span className="w-2 h-2 rounded-full bg-neonrose-500 animate-ping mr-1.5"></span>
                  24/7 Helpline
                </span>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: '#0e7490',
                    color: '#ffffff',
                  }}
                >
                  ICU &amp; OPD
                </span>
              </div>

              <a
                href="tel:180063342673"
                className="mt-1 inline-flex items-center text-base font-black text-slate-900 hover:text-sky-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-neonrose-500 shrink-0" />
                1800-MEDICORE
              </a>

              <a
                href="mailto:care@medicore.hospital"
                className="mt-2 flex items-center text-xs text-slate-600 hover:text-sky-700 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5 text-cyan-600 shrink-0" />
                care@medicore.hospital
              </a>
            </div>

            <Link
              to="/appointments"
              style={{ backgroundColor: '#0284c7', color: '#ffffff' }}
              className="w-full inline-flex items-center justify-center py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-xs transition-all"
            >
              Book Urgent Slot
            </Link>
          </div>
        </div>

        {/* Bottom Legal & Utility Row */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="flex items-center text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2 shrink-0" />
            &copy; {new Date().getFullYear()} MediCore Hospital Management System. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <Link
              to="/departments"
              className="hover:text-sky-700 transition-colors font-medium"
            >
              Specialties
            </Link>
            <span className="text-slate-300">&bull;</span>
            <Link
              to="/patients"
              className="hover:text-sky-700 transition-colors font-medium"
            >
              Patient Privacy
            </Link>
            <span className="text-slate-300">&bull;</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/85 hover:bg-sky-50 border border-sky-200/80 text-sky-700 font-semibold transition-all shadow-xs"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
