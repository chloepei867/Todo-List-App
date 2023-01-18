package com.spring.rest.webservices.restfulwebservices.todo;

import java.util.Date;
import java.util.Objects;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
@jakarta.persistence.Entity
public class Todo {
    @jakarta.persistence.Id
    @jakarta.persistence.GeneratedValue
    private Long id;
    private String username;
    private String description;
    private java.util.Date targetDate;
    private boolean isDone;

    protected Todo() {

    }

    public Todo(Long id, String username, String description, java.util.Date targetDate, boolean isDone) {
        super();
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long i) {
        this.id = i;
    }

    public String getUsername() {
        return username;
    }

    public String getDescription() {
        return description;
    }

    public java.util.Date getTargetDate() {
        return targetDate;
    }

    public boolean isDone() {
        return isDone;
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(id);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Todo other = (Todo) obj;
        if (id != other.id)
            return false;
        return true;
    }
}

