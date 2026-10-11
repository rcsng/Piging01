import React, { useState } from 'react';
import { User } from 'firebase/auth';
import {
  X,
  Plus,
  BookOpen,
  CheckCircle2,
  Clock,
  Users,
  Check,
  Ban,
  Filter,
  Sparkles,
} from 'lucide-react';
import { RecipeSubmission } from '../data/culinaryData';

interface RecipeSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  submissions: RecipeSubmission[];
  onSubmitRecipe: (recipe: Omit<RecipeSubmission, 'id' | 'createdAt' | 'status'>) => void;
  onUpdateStatus: (id: string, newStatus: 'pending' | 'approved' | 'rejected') => void;
}

export const RecipeSubmissionModal: React.FC<RecipeSubmissionModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  submissions,
  onSubmitRecipe,
  onUpdateStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'submit' | 'queue'>('submit');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  // Form State
  const [recipeName, setRecipeName] = useState('');
  const [regionName, setRegionName] = useState('Region 1 - Ilocos Region');
  const [province, setProvince] = useState('');
  const [ingredientsText, setIngredientsText] = useState('');
  const [instructionsText, setInstructionsText] = useState('');
  const [cookingTime, setCookingTime] = useState<number>(45);
  const [servingSize, setServingSize] = useState('4-6 servings');
  const [culturalNotes, setCulturalNotes] = useState('');
  const [submitterName, setSubmitterName] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipeName.trim()) return;

    const ingredients = ingredientsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    const instructions = instructionsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    onSubmitRecipe({
      userId: currentUser?.uid || 'guest-submitter',
      userDisplayName:
        submitterName.trim() ||
        currentUser?.displayName ||
        'Heritage Contributor',
      recipeName: recipeName.trim(),
      regionName,
      province: province.trim() || regionName,
      ingredients: ingredients.length > 0 ? ingredients : ['1 kg main protein or vegetable', 'Native seasonings and rock salt'],
      instructions: instructions.length > 0 ? instructions : ['Prepare local ingredients.', 'Simmer traditionally until tender.'],
      cookingTimeMinutes: Number(cookingTime) || 30,
      servingSize: servingSize.trim() || '4 servings',
      culturalNotes: culturalNotes.trim() || 'Passed down through oral culinary tradition.',
    });

    // Reset Form
    setRecipeName('');
    setProvince('');
    setIngredientsText('');
    setInstructionsText('');
    setCulturalNotes('');
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setActiveTab('queue');
    }, 1200);
  };

  const filteredSubmissions =
    filterStatus === 'all'
      ? submissions
      : submissions.filter((s) => s.status === filterStatus);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-2xl max-h-[90vh] rounded-2xl bg-[#29160D] border-2 border-[#E8A238] p-5 text-[#FFF5CC] shadow-2xl flex flex-col relative overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#5C351E]">
          <div>
            <span className="font-filipiniana text-[10px] tracking-widest uppercase text-[#FFD24C]">
              Cultural Heritage Documentation
            </span>
            <h2 className="font-woodblock font-bold text-xl text-white">
              Heirloom Recipe Submissions &amp; Review Queue
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#FFF5CC]/70 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Submit vs. Review Queue */}
        <div className="flex items-center gap-2 mt-3 mb-2">
          <button
            type="button"
            onClick={() => setActiveTab('submit')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeTab === 'submit'
                ? 'bg-[#E8A238] text-[#23140D]'
                : 'bg-[#1C0E08] text-[#FFF5CC]/70 hover:text-white'
            }`}
          >
            + Submit Heirloom Recipe
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('queue')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'queue'
                ? 'bg-[#E8A238] text-[#23140D]'
                : 'bg-[#1C0E08] text-[#FFF5CC]/70 hover:text-white'
            }`}
          >
            <span>Review Queue</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#8B1122] text-white text-[10px]">
              {submissions.length}
            </span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto pr-1 mt-2">
          {activeTab === 'submit' ? (
            // ==================== SUBMIT FORM ====================
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {submittedFeedback && (
                <div className="p-3 rounded-xl bg-[#2E5A36] border border-[#86EFAC] text-white text-xs flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#86EFAC]" />
                  <span>Recipe successfully submitted! Added to the Cultural Heritage Review Queue.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                    Recipe Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    placeholder="e.g. Ilocano Poqui-Poqui"
                    className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFD24C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                    Administrative Region *
                  </label>
                  <select
                    value={regionName}
                    onChange={(e) => setRegionName(e.target.value)}
                    className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFD24C]"
                  >
                    <option value="Region 1 - Ilocos Region">Region 1 - Ilocos Region</option>
                    <option value="Region 2 - Cagayan Valley">Region 2 - Cagayan Valley</option>
                    <option value="Region 3 - Central Luzon">Region 3 - Central Luzon</option>
                    <option value="Region 4-A - CALABARZON">Region 4-A - CALABARZON</option>
                    <option value="Region 6 - Western Visayas">Region 6 - Western Visayas</option>
                    <option value="Region 7 - Central Visayas">Region 7 - Central Visayas</option>
                    <option value="Region 8 - Eastern Visayas">Region 8 - Eastern Visayas</option>
                    <option value="Region 9 - Zamboanga Peninsula">Region 9 - Zamboanga Peninsula</option>
                    <option value="Region 10 - Northern Mindanao">Region 10 - Northern Mindanao</option>
                    <option value="Region 11 - Davao Region">Region 11 - Davao Region</option>
                    <option value="BARMM & Region 12">BARMM &amp; Region 12</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                    Province of Origin
                  </label>
                  <input
                    type="text"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="e.g. Ilocos Norte"
                    className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFD24C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                    Cooking Time (Minutes)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="600"
                    value={cookingTime}
                    onChange={(e) => setCookingTime(Number(e.target.value))}
                    className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFD24C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                    Serving Size
                  </label>
                  <input
                    type="text"
                    value={servingSize}
                    onChange={(e) => setServingSize(e.target.value)}
                    placeholder="e.g. 4-6 servings"
                    className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFD24C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                  Ingredients List (One per line) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={ingredientsText}
                  onChange={(e) => setIngredientsText(e.target.value)}
                  placeholder="3 pcs grilled eggplants, peeled&#10;2 eggs, beaten&#10;Native shallots, garlic, tomatoes&#10;Coarse sea salt and ground black pepper"
                  className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] p-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFD24C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                  Step-by-Step Instructions (One step per line) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={instructionsText}
                  onChange={(e) => setInstructionsText(e.target.value)}
                  placeholder="1. Charcoal-grill eggplants until skin is charred, then peel under cool water.&#10;2. Sauté native shallots and tomatoes in lard.&#10;3. Fold in mashed eggplant and pour beaten eggs, cooking gently."
                  className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] p-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFD24C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                  Cultural Notes &amp; Oral Heritage
                </label>
                <textarea
                  rows={2}
                  value={culturalNotes}
                  onChange={(e) => setCulturalNotes(e.target.value)}
                  placeholder="Explain the dish's historical background, festival significance, or heirloom cooking secrets..."
                  className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] p-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFD24C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                  Contributor Name
                </label>
                <input
                  type="text"
                  value={submitterName}
                  onChange={(e) => setSubmitterName(e.target.value)}
                  placeholder={currentUser?.displayName || 'Your Name / Family Name'}
                  className="w-full rounded-lg bg-[#1C0E08] border border-[#8C5832] px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFD24C]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E8A238] to-[#FFD24C] hover:from-[#FFD24C] hover:to-[#FFE28A] text-[#1E110B] font-woodblock font-bold text-xs uppercase tracking-wider shadow-lg active:scale-[0.98] transition-all cursor-pointer"
              >
                Submit for Heritage Review
              </button>
            </form>
          ) : (
            // ==================== REVIEW QUEUE ====================
            <div className="space-y-3">
              {/* Filter Row */}
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs text-[#FFF5CC]/80">
                  Showing {filteredSubmissions.length} of {submissions.length} submissions
                </span>
                <div className="flex items-center gap-1">
                  {(['all', 'pending', 'approved', 'rejected'] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setFilterStatus(st)}
                      className={`px-2 py-0.8 rounded text-[10px] font-bold uppercase cursor-pointer ${
                        filterStatus === st
                          ? 'bg-[#E8A238] text-[#1E110B]'
                          : 'bg-[#1C0E08] text-[#FFF5CC]/70 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {filteredSubmissions.length === 0 ? (
                <div className="p-8 rounded-xl bg-[#1C0E08] border border-[#8C5832]/50 text-center text-xs text-[#FFF5CC]/70">
                  No submissions found in this status category.
                </div>
              ) : (
                filteredSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-3.5 rounded-xl bg-[#1C0E08] border border-[#8C5832] space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-woodblock font-bold text-sm text-white">
                            {sub.recipeName}
                          </h4>
                          <span
                            className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                              sub.status === 'approved'
                                ? 'bg-[#2E5A36] text-[#86EFAC]'
                                : sub.status === 'rejected'
                                ? 'bg-[#8B1122] text-[#FFD2D2]'
                                : 'bg-[#E8A238]/30 text-[#FFD24C]'
                            }`}
                          >
                            {sub.status}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#FFD24C]">
                          {sub.province} &bull; {sub.regionName} &bull; By {sub.userDisplayName}
                        </span>
                      </div>

                      {/* Review Decision Buttons */}
                      <div className="flex items-center gap-1">
                        {sub.status !== 'approved' && (
                          <button
                            type="button"
                            onClick={() => onUpdateStatus(sub.id, 'approved')}
                            title="Approve Recipe"
                            className="p-1.5 rounded-lg bg-[#2E5A36] hover:bg-[#396E43] text-white cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {sub.status !== 'rejected' && (
                          <button
                            type="button"
                            onClick={() => onUpdateStatus(sub.id, 'rejected')}
                            title="Reject Recipe"
                            className="p-1.5 rounded-lg bg-[#8B1122] hover:bg-[#A11528] text-white cursor-pointer"
                          >
                            <Ban className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="text-[11px] text-[#FFF5CC]/80 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FFD24C]" />
                        {sub.cookingTimeMinutes} mins
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#FFD24C]" />
                        {sub.servingSize}
                      </span>
                    </div>

                    <div className="text-xs bg-[#29160D] p-2.5 rounded-lg border border-[#5C351E]/60 space-y-1">
                      <p className="text-[11px] font-semibold text-[#FFD24C]">Cultural Notes:</p>
                      <p className="font-editorial text-[11px] text-[#FFF5CC]/90 leading-relaxed">
                        {sub.culturalNotes}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
