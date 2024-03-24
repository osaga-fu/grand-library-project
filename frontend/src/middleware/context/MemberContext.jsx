import React, { createContext, useContext, useState } from "react";
import { MemberService } from "../../services/MemberService";

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  const memberService = new MemberService();

  const searchMembers = async (query) => {
    try {
      const data = await memberService.searchMembers(query);
      setMembers(data);
    } catch (error) {
      console.error("Error al buscar miembros", error);
    }
  };

  const addMember = async (data) => {
    try {
      const response = await memberService.addMember(data); 
  
      console.log("Member added successfully:", response.data); 
  
    } catch (error) {
      console.error("Error adding member:", error);
      throw new Error("Failed to add member"); 
    }
  };

  const value = {
    members,
    searchMembers,
    addMember
  };

  return (
    <MemberContext.Provider value={value}>
        {children}
    </MemberContext.Provider>
  );
};

export const useMemberContext = () => useContext(MemberContext);