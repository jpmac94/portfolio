package com.PI.API.model.dto;

import com.PI.API.model.Category;
import com.PI.API.model.City;
import com.PI.API.model.Feature;
import com.PI.API.model.Picture;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductDTO {

    private Long id;

    private String name;

    private String description;

    private Category category;

    private City city;

    private Set<Picture> pictures= new HashSet<>();

    private Set<Feature> features= new HashSet<>();
}
