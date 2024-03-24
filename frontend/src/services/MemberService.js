import axios from "axios";

export class MemberService {
  async searchMembers(query) {
    const response = await axios.get(
      `http://localhost:8080/members?query=${query}`
    );
    return response.data;
  }

  async addMember(data) {
    const response = await axios.post(`http://localhost:8080/members`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  }

}
