

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTabs } from '../Context/TabProvider';
import { ChevronDown, ChevronUp, X, GripHorizontal, Plus } from 'lucide-react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

// Card components remain the same
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
  )
);
CardContent.displayName = "CardContent";

interface Condition {
  question: string;
  options: string[];
}

interface SavedEntry {
  id: number;
  categoryAnswers: Record<string, Record<string, string>>;
  timestamp: string;
}

const ROSSection = () => {
  const { id } = useParams();
  const { addTab } = useTabs();
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, Record<string, string>>>({});
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [savedEntries, setSavedEntries] = useState<SavedEntry[]>([]);
  const [draggedCard, setDraggedCard] = useState<number | null>(null);
  const [draggedOverCard, setDraggedOverCard] = useState<number | null>(null);

  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    addTab({ id: "/reviewsystem", name: "ROS", path: `/reviewsystem/${id}` });
  }, [addTab, id]);

  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/assets/json/reviewSytem.json`);
        setConditions(response.data);
        console.log('conditions',response.data)
      } catch (error) {
        console.error("Error fetching ROS content:", error);
      }
    };

    fetchConditions();
  }, []);

  const handleAnswerChange = (category: string, symptom: string, severity: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [category]: {
        ...(prev[category] || {}),
        [symptom]: severity
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    setSavedEntries(prev => [...prev, {
      id: Date.now(),
      categoryAnswers: { ...selectedAnswers },
      timestamp
    }]);
    setSelectedAnswers({});
    setIsFormVisible(false);
  };

  // Drag and drop handlers remain the same
  const handleDeleteEntry = (entryId: number) => {
    setSavedEntries(prev => prev.filter(entry => entry.id !== entryId));
  };

  const handleDragStart = (entryId: number) => {
    setDraggedCard(entryId);
  };

  const handleDragOver = (e: React.DragEvent, entryId: number) => {
    e.preventDefault();
    setDraggedOverCard(entryId);
  };

  const handleDrop = () => {
    if (draggedCard === null || draggedOverCard === null) return;
    
    const updatedEntries = [...savedEntries];
    const draggedIndex = updatedEntries.findIndex(entry => entry.id === draggedCard);
    const droppedIndex = updatedEntries.findIndex(entry => entry.id === draggedOverCard);
    
    const [draggedItem] = updatedEntries.splice(draggedIndex, 1);
    updatedEntries.splice(droppedIndex, 0, draggedItem);
    
    setSavedEntries(updatedEntries);
    setDraggedCard(null);
    setDraggedOverCard(null);
  };

  
  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="p-6">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-formHeading_1">Review of Systems</h1>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md  transition-colors"
        >
          {isFormVisible ? (
            <>
              <X className="h-4 w-4" />
              Close Form
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" />
              New Entry
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col gap-6">
       

{isFormVisible && (
  <Card className="w-full">
    <CardContent className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6 ">
      
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {conditions.map((category) => (
          <div key={category.question} className="space-y-3">
            <div className="flex items-center">
              <label  className="text-md font-semibold text-[#1c4b85]">{category.question}</label>
            </div>

            {/* Answer Selection */}
            <select
                value={selectedAnswers[category.question]?.[category.symptom] || ''}
                onChange={(e) => handleAnswerChange(category.question, e.target.value)}
                className="w-full text-[#3972c7] px-3 py-2 border rounded-md focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select an option</option>
                {category.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              

          </div>
        ))}
      </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
          >
            Save Entry
          </button>
        </div>
      </form>
    </CardContent>
  </Card>
)}




<div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {savedEntries.map((entry) => {
        const isExpanded = expandedCards[entry.id];

        return (
          <motion.div
            key={entry.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Card
              draggable
              onDragStart={() => handleDragStart(entry.id)}
              onDragOver={(e) => handleDragOver(e, entry.id)}
              onDrop={handleDrop}
              className={`cursor-move transition-all  bg-teal-50  border border-gray-300  border-t-4 rounded-2xl shadow-lg p-4  hover:shadow-xl transform  border-b-4 hover:scale-[1.02] ${
                isExpanded ? "h-auto" : "h-56"
              }`}
            >
              <CardHeader className="flex flex-row  items-center justify-between pb-2">
                <button
                  onClick={() => handleDeleteEntry(entry.id)}
                  className="p-1 hover:bg-gray-200  rounded-full transition-all duration-200"
                >
                  <X className="ml-72  -mt-8 h-4 w-4 text-red-500" />
                </button>
                <div className="flex items-center gap-2 ">
                  {/* <GripHorizontal className="h-5 w-5 text-gray-400" /> */}
                  <span className="text-sm -mt-5 font-medium text-gray-700">{entry.timestamp}</span>
                </div>
              </CardHeader>

              <CardContent className="relative overflow-hidden">
                <AnimatePresence>
                  <motion.div
                    initial={{ height: "4rem", opacity: 1 }}
                    animate={{ height: isExpanded ? "auto" : "4rem", opacity: 1 }}
                    exit={{ height: "4rem", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-4 overflow-hidden"
                  >
                    {Object.entries(entry.categoryAnswers).map(([category, symptoms]) => (
                      <div key={category} className="space-y-2">
                        <h4 className="font-semibold text-[#002D62]">{category}</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {Object.entries(symptoms).map(([symptom]) => (
                            <div key={symptom} className="text-sm flex justify-between">
                              <span className="text-[#1c4b85]">{symptom}</span>
                            
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <div className=" bottom-0 mt-8 left-0 w-full bg-gradient-to-t from-white via-white to-transparent text-center">
                  <button
                    onClick={() => toggleExpand(entry.id)}
                    className="text-blue-600 text-sm font-semibold p-2 transition-all duration-200 hover:text-blue-800"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
      </div>
    </div>
  );
};

export default ROSSection;