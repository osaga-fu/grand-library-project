package com.grandlibrary.backend.controllers.members;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grandlibrary.backend.services.MemberService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping("/members")
    public List<MemberResponse> searchMembers(@RequestParam("query") String query) {
        return memberService.searchMembers(query);
    }

    @PostMapping("/members")
    public MemberResponse createMember(@RequestBody MemberRequest request) {
        return memberService.createMember(request);
    }

}
