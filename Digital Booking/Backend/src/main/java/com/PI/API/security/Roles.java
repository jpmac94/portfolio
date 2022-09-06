package com.PI.API.security;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.*;
import java.util.stream.Collectors;

public enum Roles {
    USER(new HashSet(Arrays.asList(Permissions.USER_READ,Permissions.USER_WRITE))),
    ADMIN(new HashSet(Arrays.asList(Permissions.ADMIN_READ,Permissions.ADMIN_WRITE,Permissions.USER_READ,Permissions.USER_WRITE)));


    private final Set<Permissions> permissionsSet;

    Roles(Set<Permissions> permissionsSet) {
        this.permissionsSet = permissionsSet;
    }

    public Set<Permissions> getPermissionsSet() {
        return permissionsSet;
    }

    public Set<SimpleGrantedAuthority> getGreantedAuthorities(){
        Set<SimpleGrantedAuthority> permissions= getPermissionsSet().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority("ROLE_"+this.name()));
        return permissions;
    }

}
