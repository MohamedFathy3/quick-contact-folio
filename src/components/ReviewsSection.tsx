
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "mohamed ali",
      company: "Tech Startup Inc.",
      rating: 4,
      review: "Outstanding work! The website exceeded our expectations. Professional, responsive, and delivered on time.",
      avatar: "SJ"
    },
    {
      name: " ali ahmed",
      company: "E-commerce Solutions",
      rating: 5,
      review: "Excellent developer with great attention to detail. The mobile app works flawlessly across all platforms.",
      avatar: "MC"
    },
    {
      name: "Nour Sayed",
      company: "Digital Agency",
      rating: 5,
      review: "Highly skilled and reliable. Great communication throughout the project. Will definitely work together again.",
      avatar: "ED"
    }
   
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
