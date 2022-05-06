package com.example.Server.repo;

import com.example.Server.models.Notes;
import org.springframework.data.repository.CrudRepository;

public interface NotesRepository extends CrudRepository<Notes, Long> {
}
