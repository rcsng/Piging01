import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle2, User } from 'lucide-react';
import { DishReview } from '../data/culinaryData';

interface DishReviewSectionProps {
  dishId: string;
  reviews: DishReview[];
  onAddReview: (dishId: string, rating: number, reviewText: string) => void;
  currentUserName?: string;
}

export const DishReviewSection: React.FC<DishReviewSectionProps> = ({
  dishId,
  reviews,
  onAddReview,
  currentUserName,
}) => {
  const [selectedRating, setSelectedRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [submittedFeedback, setSubmittedFeedback] = useState<boolean>(false);

  const dishReviews = reviews.filter((r) => r.dishId === dishId);

  const averageRating =
    dishReviews.length > 0
      ? (
          dishReviews.reduce((sum, r) => sum + r.rating, 0) / dishReviews.length
        ).toFixed(1)
      : '5.0';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    onAddReview(dishId, selectedRating, reviewText.trim());
    setReviewText('');
    setSubmittedFeedback(true);
    setTimeout(() => setSubmittedFeedback(false), 2500);
  };

  return (
    <div className="rounded-xl bg-[#2A150C] border-2 border-[#8C5832]/60 p-4 text-[#FFF5CC] space-y-4 shadow-lg">
      {/* Header & Average Score Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#5C351E]">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD24C]">
            Community Culinary Ratings
          </span>
          <h3 className="font-woodblock font-bold text-lg text-white">
            Reviews &amp; Heritage Ratings
          </h3>
        </div>

        {/* Big Average Star Rating Lockup */}
        <div className="flex items-center gap-2.5 bg-[#1C0D07] px-3.5 py-1.5 rounded-xl border border-[#5C351E] self-start sm:self-auto">
          <span className="font-woodblock font-black text-2xl text-[#FFD24C]">
            {averageRating}
          </span>
          <div>
            <div className="flex items-center gap-0.5 text-[#FFD24C]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.round(Number(averageRating))
                      ? 'fill-[#FFD24C]'
                      : 'text-stone-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-[#FFF5CC]/70">
              {dishReviews.length} {dishReviews.length === 1 ? 'review' : 'reviews'}
            </span>
          </div>
        </div>
      </div>

      {/* Review Submission Form */}
      <form onSubmit={handleSubmit} className="space-y-3 bg-[#1C0D07] p-3 rounded-xl border border-[#5C351E]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white">
            Leave a Rating &amp; Tasting Note:
          </span>

          {/* Interactive Star Picker */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setSelectedRating(star)}
                className="p-1 cursor-pointer transition-transform hover:scale-125"
                title={`${star} star${star > 1 ? 's' : ''}`}
              >
                <Star
                  className={`w-5 h-5 ${
                    star <= (hoverRating || selectedRating)
                      ? 'fill-[#FFD24C] text-[#FFD24C]'
                      : 'text-stone-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <textarea
          rows={2}
          required
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder={`Share your experience tasting this dish or traditional preparation tips...`}
          className="w-full rounded-lg bg-[#2D180C] border border-[#8C5832] p-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFD24C]"
        />

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#E8A238] hover:bg-[#F5B727] text-[#1E110B] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Submit Review
          </button>

          {submittedFeedback && (
            <span className="text-xs text-[#86EFAC] flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Thank you for reviewing!
            </span>
          )}
        </div>
      </form>

      {/* List of Recent Reviews */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD24C]">
          Recent Community Reviews ({dishReviews.length})
        </h4>

        {dishReviews.length === 0 ? (
          <p className="text-xs text-[#FFF5CC]/60 italic py-2">
            No reviews yet. Be the first to rate this heritage dish!
          </p>
        ) : (
          dishReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-3 rounded-lg bg-[#1C0D07] border border-[#5C351E] space-y-1"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#E8A238] text-[#1E110B] flex items-center justify-center text-[10px]">
                    {rev.userDisplayName[0] || 'U'}
                  </span>
                  <span>{rev.userDisplayName}</span>
                </span>

                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5 text-[#FFD24C]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < rev.rating ? 'fill-[#FFD24C]' : 'text-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#FFF5CC]/60 ml-1">
                    {rev.createdAt}
                  </span>
                </div>
              </div>

              <p className="font-editorial text-xs text-[#FFF5CC]/90 leading-relaxed pt-0.5">
                {rev.reviewText}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
