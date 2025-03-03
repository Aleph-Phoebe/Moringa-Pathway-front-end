import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const MyApplications = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Mock data
  const applications = [
    { 
      i Continuing from where I left off: