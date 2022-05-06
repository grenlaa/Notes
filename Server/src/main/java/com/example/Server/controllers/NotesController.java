package com.example.Server.controllers;

import com.example.Server.models.Notes;
import com.example.Server.repo.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api")
public class NotesController {


    @Value("${upload.path}")
    private String uploadPath;

    @Autowired
    private NotesRepository NotesRepository;

    @GetMapping("/GetNotes")
    public List<Notes> getNotes() {
        return (List<Notes>) this.NotesRepository.findAll();
    }

    @PostMapping("/CreateNotes")
    public String CreateNotes(
            @RequestParam String title,
            @RequestParam String descr
    ){
        Notes Notes=new Notes(title,descr);
        NotesRepository.save(Notes);
        return "+";
    }

    @GetMapping("/DelNotes/{id}")
    public String DelNotes(@PathVariable(value="id") long id, Model model) {
        Notes Notes= NotesRepository.findById(id).orElseThrow();
        NotesRepository.delete(Notes);
        return ("-"+id);
    }


    @PostMapping("/EditNotes/{id}")
    public String EditNotes(
            @PathVariable(value="id") long id,
            @RequestParam String title,
            @RequestParam String descr
    )throws IOException {
        Notes Notes = NotesRepository.findById(id).orElseThrow();
        Notes.setDescr(descr);
        Notes.setTitle(title);
        NotesRepository.save(Notes);
        return("edit"+id);
    }

}
