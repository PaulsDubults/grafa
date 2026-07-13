import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FinansesSelf() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/pakalpojumi/konsultacijas-pasnodarbinatajiem', { replace: true });
  }, [navigate]);
  return null;
}