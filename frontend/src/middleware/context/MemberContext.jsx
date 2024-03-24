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

  const value = {
    members,
    searchMembers,
  };

  return (
    <MemberContext.Provider value={value}>
        {children}
    </MemberContext.Provider>
  );
};

export const useMemberContext = () => useContext(MemberContext);