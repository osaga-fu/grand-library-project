package com.grandlibrary.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandlibrary.backend.controllers.members.MemberRequest;
import com.grandlibrary.backend.controllers.members.MemberResponse;
import com.grandlibrary.backend.persistence.members.Member;
import com.grandlibrary.backend.persistence.members.MemberRepository;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public List<MemberResponse> searchMembers(String query) {
        List<Member> members = memberRepository
                .findAllByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrDniContainingIgnoreCaseOrEmailContainingIgnoreCase(
                        query, query, query, query);

        List<MemberResponse> memberResponses = new ArrayList<>();
        for (Member member : members) {
            memberResponses.add(new MemberResponse(member.getMemberId(), member.getFirstName(),
                    member.getLastName(), member.getDni(), member.getEmail()));
        }

        return memberResponses;
    }

    public MemberResponse createMember(MemberRequest request) {
        Member member = new Member(request.getMemberId(), request.getFirstName(), request.getLastName(),
                request.getDni(), request.getEmail());
        Member savedMember = memberRepository.save(member);
        return new MemberResponse(savedMember.getMemberId(), savedMember.getFirstName(),
                savedMember.getLastName(), savedMember.getDni(), savedMember.getEmail());
    }

}
